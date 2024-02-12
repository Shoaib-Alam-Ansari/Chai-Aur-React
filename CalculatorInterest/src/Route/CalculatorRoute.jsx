
import { Route, Routes } from "react-router-dom";
import { CompoundInterest } from "../Components";

<Routes>
    <Route path="/" element={<CompoundInterest />}/>
    <Route path="/simple-interest" element={<CompoundInterest />}/>
    <Route path="/daily-compound" element={<CompoundInterest />}/>
    <Route path="/forex-compound" element={<CompoundInterest />}/>
</Routes>