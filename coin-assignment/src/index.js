import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Payment from './reoter/payment';
import Product from './reoter/product';
import HomePage from './reoter/Homepage';
import Price from './reoter/coinprice';
import Error from './Error';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>

<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="payment" element={<Payment/>}><Route path=":price" element={<Payment/>} /></Route>
<Route path="Product" element={<Product/>}/>
<Route path="Price" element={<Price/>}/>
<Route path="*" element={<Error/>}/>

</Routes>
</BrowserRouter>

</>

);


