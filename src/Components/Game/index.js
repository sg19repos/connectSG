import React from "react";
import * as styles from "./styles.css";

const totalBlocks = 50;
const diamonds = Math.random(0, 50);
const mines = Math.random(0, 50);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let numArray = [];
for (let i = 1; i <= 49; i++) {
    numArray.push(i);
}
const shuffledArray = shuffleArray(numArray);

const MineSweeper = () => {
    return (
        <div className="field">
            {shuffledArray.map(arrayElement => {
                return (
                    <div
                        id="arrayElement"
                        className={
                            arrayElement % 2 === 0
                                ? "cell cell-diamond"
                                : "cell  cell-mine"
                        }
                    >
                        O
                    </div>
                );
            })}
        </div>
    );
};

export default MineSweeper;
