import { useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthApi';
import '../Sass/LoginComponent.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { styles } from '../common/toasts';

export { useState, LoginAPI, RegisterAPI, styles, ToastContainer, toast };
