const React = require('react');
const headshot = require("./headshot.js");
const { useState, useEffect, lazy } = React;
const { createRoot } = require('react-dom/client');

const setupButton = () => {
    let button = document.getElementsByTagName("button")[0];
    button.onclick = async () => {
        let curr = await (await fetch("/playerRandom")).json();
        document.body.appendChild(headshot.toImg(curr.playerId, 1));
        console.log(curr);
        let bruh = await (await fetch("/playerInfo" + `?id=${curr.playerId}`)).json();
        console.log(bruh);
    }
};

const init = () => {
    setupButton();
    const root = createRoot(document.getElementById('component'));
    root.render(<h1>Main</h1>);
};

window.onload = init;