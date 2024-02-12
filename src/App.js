import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import './App.css'; // Ensure this is pointing to your CSS file

import logo from '../src/img/kiss-cute.gif'

function App() {
    const [noCount, setNoCount] = useState(0);
    const [response, setResponse] = useState('');
    const [showGif, setShowGif] = useState(false);
    const yesButtonSize = noCount * 10 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "Surely you jest?",
            "Again, but with feeling!",
            "Say 'Yes' for a surprise!",
            "Y'know, 'Yes' suits you better.",
            "Imagine we're in a rom-com. Say yes!",
            "Spoiler: 'Yes' leads to happiness.",
            "Try 'Yes', it's the new 'No'",
            "Even my dog thinks you should say yes.",
            "Yes is the path to the dark side. Join me.",
            "Press 'Yes' to win an imaginary cookie 🍪",
            "Yes? More like Yaaaas!",
            "Flip a coin: Heads, say yes. Tails, not no.",
            "Pretend it's Opposite Day.",
            "Choose your adventure: Yes leads to treasure!",
            "Yes for pizza, No for... just kidding. Always yes for pizza 🍕",
            "If you say yes, I'll do a happy dance!",
            "Yes unlocks the secret level 🎮",
            "Bet you can't say 'Yes' five times fast!",
            "Would a cute puppy convince you? 🐶",
            "Say 'Yes' and make the world a bit brighter ✨",
        ];

        // Return a random phrase each time
        return phrases[Math.floor(Math.random() * phrases.length)];
    }



    const handleYes = () => {
        setResponse('Yes! 💖 You made the right choice! Love you 💓');
        setShowGif(true); // Set the state to show the GIF
    };


    // Generate an array of stars
    const stars = Array.from({ length: 300 }, (_, index) => (
        <div
            key={index}
            className="star"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 1}s`,
                animationDelay: `${Math.random() * 2}s`
            }}
        />
    ));

    return (
        <Box className="cosmic-background flex flex-col items-center justify-center h-screen relative">
            {stars}
            <Box className="flex flex-col items-center justify-center z-10 relative" >
                {response === '' && (
                    <>
                        <Typography variant="h5" gutterBottom className="sparkling-text" style={{ margin: '4rem', textAlign: 'center' }}>
                            Hey Love, you've filled my life with so much joy and love, it's hard to put into words. But as Valentine's Day approaches, I find myself wanting to make sure we celebrate it in the best way possible - together.
                            So, here's me, asking in the only way I know how, straight from the heart: Will you be my Valentine? Let's make this day as special as you are to me. 💖
                        </Typography>
                        <Typography variant="h2" gutterBottom className="sparkling-text">
                            Will you be my Valentine? 🌹
                        </Typography>

                        <Box>
                            <Button variant="contained" className="m-2" sx={{ backgroundColor: pink[500], '&:hover': { backgroundColor: pink[700] }, margin: '1rem' }}
                                    onClick={handleYes}
                                    style={{ fontSize: yesButtonSize }}
                            >
                                Yes 😊
                            </Button>
                            <Button
                                id="noButton"
                                variant="contained"
                                className="m-2"
                                sx={{
                                    backgroundColor: pink[500],
                                    '&:hover': { backgroundColor: pink[700] },
                                    margin: '1rem',
                                }}
                                onClick={handleNoClick}
                            >
                                {noCount === 0 ? "No 😔" : getNoButtonText()}
                            </Button>
                        </Box>
                    </>
                )}
                {response && (
                    <>
                        <Typography variant="h5" color="text.primary" className="sparkling-text">
                            {response}
                        </Typography>
                        {showGif && (
                            <Box className="flex flex-col items-center justify-center z-10">
                                <img src={logo} alt="Celebratory Kiss" />
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
}

export default App;
