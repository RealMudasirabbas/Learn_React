import React from "react";
import SumOfTwoNumbers from "./components/SumOfTwoNumbers";
import CelsiusToFahrenheit from "./components/CelsiusToFahrenheit";
import AddPy from "./components/AddPy";
import Card from "./utils/Card";
import RemoveACharacter from "./components/RemoveACharacter";
import ModifyAString from "./components/ModifyAString";
import AddChar from "./components/AddChar";
import CheckMultiples from "./components/CheckMultiples";
import AddThreeChars from "./components/AddThreeChars";


function App() {
    return (
        <div className="flex flex-row flex-wrap max-lg:w-full">
            <Card>
                <SumOfTwoNumbers />
            </Card>
            <Card>
                <CelsiusToFahrenheit />
            </Card>
            <Card>
                <AddPy />
            </Card>

            <Card>
                <RemoveACharacter />
            </Card>
            <Card>
                <ModifyAString />
            </Card>

            <Card>
                <AddChar />
            </Card>
            <Card>
                <CheckMultiples />
            </Card>
            <Card>
                <AddThreeChars />
            </Card>
        </div>
    );
}

export default App;
