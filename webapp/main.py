import flask as fl
import base64
import re
import cv2
from tensorflow.keras.models import load_model
import numpy as np
import matplotlib.pyplot as plt
from imageio import imread
import io
import PIL.Image as pyimage



app = fl.Flask(__name__)


@app.route("/")
def home():

    return fl.render_template("index.html")


@app.route("/predict", methods=['GET', 'POST'])
def predict():

    #reads from ajax sent request
    imgStr = fl.request.values.get("image") 
    # split a string on comma delimiter and get second element
    subImgStr = imgStr.split(',')[1]
    # decode string into bytes
    imageBytes = base64.b64decode(subImgStr)
    # read bytes into python image 
    pyimg = pyimage.open(io.BytesIO(imageBytes))
    # convert python image into numpy array
    imgArr = np.asarray(pyimg)
    
    # resize image to 28 x 28 dimension
    imgResize = cv2.resize(imgArr, (28,28), interpolation = cv2.INTER_AREA)
    # convert to gray color with one channel
    imgGray = cv2.cvtColor(imgResize, cv2.COLOR_BGR2GRAY)
    # scale for fast processing
    imgGray= imgGray/255
  
    # reshape to fit cnn model 
    img = imgGray.reshape(-1,28,28,1).astype('float32')
 
    # load saved trained model
    model = load_model('../model/model.h5')
    # predict classes
    result = model.predict_classes(img)



    # send back to web client
    return fl.make_response(str(result[0]))





if __name__ == "__main__":
    app.run(debug=True)
