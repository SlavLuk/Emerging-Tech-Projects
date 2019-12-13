# Emerging-Tech-Projects

>Title: Hand-written digits recognition model and Flask webapp.
>
>Author: Slav Lukyanov
>
>Student-ID: G00339839
>
>Module: Emerging Technologies
>
>Year: 4
>
>Lecturer: Ian McLoughlin

## Introduction

This project consists of two parts,first part is a convolutional neural network model able to recognise hand-written digits,second part is a web application implemented with Flask framework.
It was created as a project for the module "Emerging Technologies" in 4rd year of the Bsc. Software Development Course at Galway-Mayo Institute of Technology.

## Software Requirements

To run the script and notebooks within this reposition I would recommend downloading and installing the following applications.
- [Anaconda](https://www.anaconda.com/). Anaconda contains most of the necessary tools to run the script and notebooks.
To download and install go to following [link](https://www.anaconda.com/download/) and download for your spesific system.  

Once Anaconda is installed we can now install Tensorflow and Keras. Type the following command to list the libraries which are already installed on your system.

- List all packages and versions installed in active environment
```sh
   $ conda list
```
- Install a package included in Anaconda
```sh
   $ conda install tensorflow
```
- And for Keras type
```sh
   $ conda install keras
```
You should now be able to run the script and notebooks. If you get any errors it is more then likely that you might need to add another libraries. Make sure you read the error messages as they will indicate to you which libraries you need to install.
## Cloning Repository
There is two ways to downloading the repository. If you have git installed run the following terminal command
```sh
   $ git clone https://github.com/SlavLuk/Emerging-Tech-Projects
```
Just make sure that you are in the directory that your which clone the repository into. 
The second way is to download a zipped version of the repository. Once within the repository, click on the green **clone or download** button and press **Download ZIP**.

To run the notebooks open a Anaconda terminal and navigate to where you have cloned the repository. Once you are within the repository type the following 
```sh
   $ jupyter notebook
```
Jupyter Notebook will now open within a browser window. You can now click into the notebook of your choice. 

To run Python script  open a Anaconda terminal and navigate to C:// Your directory/Emerging-Tech-Projects-master/Emerging-Tech-Projects-master/webapp
```sh
   $ python main.py
```
Flask app is accessible in this url http://127.0.0.1:5000