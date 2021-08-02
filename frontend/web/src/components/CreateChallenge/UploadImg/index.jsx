import React, { useState, useContext, useCallback, useEffect } from 'react';
import {
  Paper,
  Grid,
  Avatar,
  createMuiTheme,
  ThemeProvider,
  Fab,
  Divider,
  FormControlLabel,
  Checkbox,
  Input,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import Wrapper from './styles';
import { ViewContext } from '../../../context/ViewContext';
import { useDropzone } from 'react-dropzone';
import NavigationIcon from '@material-ui/icons/Navigation';
import Axios from 'axios';



const ThumbnailImageComponent = props => {
  const { thumbnailImageData, setThumbnailImageData } = useContext(ViewContext);

  const onDrop = useCallback(acceptedFiles => {
    console.log('PPAP: Basic -> acceptedFiles', acceptedFiles);
    // Do something with the files
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone(onDrop);

  useEffect(() => {
    for (const file of acceptedFiles) {
      console.log('TCL: Basic -> file', file);
      setThumbnailImageData({
        img: URL.createObjectURL(file),
        file: file,
      });
    }
  }, [acceptedFiles]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Wrapper>
      <h4 className="ThumbnailImageComponentH4">corver preview</h4>
      <Paper>
        <section className="container">
          <div {...getRootProps({ className: 'dropzone' })}>
            {thumbnailImageData.img ? (
              <Avatar
                variant="square"
                src={thumbnailImageData.img}
                className="coverAvatar"
              />
            ) : (
              <Fab variant="extended" className="cover-upload-fab">
                <NavigationIcon className="extended-icon" />
                Upload Image
              </Fab>
            )}
            <input {...getInputProps()} />
          </div>
          <aside className="thumbnail-image-component-aside">
            <h4>Image Requirement</h4>
            <h4>Minimum size of "800x600"</h4>
            <ul>{files}</ul>
          </aside>
        </section>
      </Paper>
    </Wrapper>
  );
};

export default ThumbnailImageComponent;
