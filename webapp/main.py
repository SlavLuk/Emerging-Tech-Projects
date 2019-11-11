import flask as fl
import base64
import re
import cv2
from keras.models import load_model


app = fl.Flask(__name__)


@app.route("/")
def home():

    return fl.render_template("index.html")


@app.route("/predict", methods=['GET', 'POST'])
def predict():

    imgStr = fl.request.values.get("image")

    imgStrSub = re.sub('^data:image/.+;base64,', '', imgStr)
    image = base64.b64decode(imgStrSub)
    img = cv2.resize(image, (28, 28), interpolation=cv2.INTER_AREA)
    arr = img.reshape(-1, 28, 28, 1).astype('float32')
    arr /= 255

    model = load_model('my_model.h5')
    model.predict(arr)

    return fl.Response(imgStr)


if __name__ == "__main__":
    app.run(debug=True)
