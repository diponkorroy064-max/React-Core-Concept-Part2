import { useState } from 'react';
export default function Batsman() {
    const [score, setScore] = useState(0);

    const handleSingles = () => {
        setScore(score + 1);
        handleOnes();
        handleBalls();
    }
    const handleFour = () => {
        setScore(score + 4);
        handleFours();
        handleBalls();
    }
    const handleSix = () => {
        setScore(score + 6);
        handleSixes();
        handleBalls();
    }
    const handleThree = () => {
        setScore(score + 3);
        handleThrees();
        handleBalls();
    }
    const handleTwo = () => {
        setScore(score + 2);
        handleTwos();
        handleBalls();
    }


    const [sixes, setSixes] = useState(0);
    const handleSixes = () => {
        setSixes(sixes + 1);
    }
    const [fours, setFours] = useState(0);
    const handleFours = () => {
        setFours(fours + 1);
    }
    const [threes, setThrees] = useState(0);
    const handleThrees = () => {
        setThrees(threes + 1);
    }
    const [twos, setTwos] = useState(0);
    const handleTwos = () => {
        setTwos(twos + 1);
    }
    const [ones, setOnes] = useState(0);
    const handleOnes = () => {
        setOnes(ones + 1);
    }

    const [balls, setBalls] = useState(0);
    const handleBalls = () => {
        setBalls(balls + 1);
    }


    return (
        <div style={{border: "2px solid red", margin: "20px", padding: "10px", width: "350px"}}>
            <img style={{width: "100%"}} src="src/assets/tamim.jpg" alt="Tamim Iqbal"/>
            <h3>Tamim Iqbal</h3>

            <h2>Score: {score} from {balls} balls</h2>

            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
                <span>Sixes: {sixes}</span>
                <span>Fours: {fours}</span>
                <span>Threes: {threes}</span>
                <span>Twos: {twos}</span>   
                <span>Singles: {ones}</span>
            </div>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleThree}>3's</button>
            <button onClick={handleTwo}>2's</button>
        </div>
    )
}

