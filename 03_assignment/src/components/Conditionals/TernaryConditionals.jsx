import React from "react";

function TernaryConditionals() {
    let choice = "coffee";
    const drinks = {
        tea: {
            part: "leaf",
            caffeine: "15–70 mg/cup",
            age: "4,000+ years",
        },
        coffee: {
            part: "bean",
            caffeine: "80–185 mg/cup",
            age: "1,000+ years",
        },
    };
    return (
        <div>
            {choice == "tea" ? (
                <>
                <h2>Tea</h2>
                    <p>Part of the plant: {drinks.tea.part}</p>
                    <p>Caffine Content: {drinks.tea.caffeine}</p>
                    <p>Age: {drinks.tea.age}</p>
                </>
            ) : (
                <>
                <h2>Coffee</h2>
                    <p>Part of the plant: {drinks.coffee.part}</p>
                    <p>Caffine Content: {drinks.coffee.caffeine}</p>
                    <p>Age: {drinks.coffee.age}</p>
                </>
            )}
        </div>
    );
}

export default TernaryConditionals;
