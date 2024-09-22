// Ensure that constants are declared only once
const BIT_LENGTH = 10; // Number of bits in the quantum transmission
const BASES = ["+", "x"]; // "+" = Z basis, "x" = X basis

// Function to generate random bits (0 or 1)
function generateRandomBits(length) {
    let bits = [];
    for (let i = 0; i < length; i++) {
        bits.push(Math.floor(Math.random() * 2));
    }
    return bits;
}

// Function to generate random bases (+ or x)
function generateRandomBases(length) {
    let bases = [];
    for (let i = 0; i < length; i++) {
        bases.push(BASES[Math.floor(Math.random() * 2)]);
    }
    return bases;
}

// Function to simulate quantum transmission and measure
function measureBits(aliceBits, aliceBases, bobBases) {
    let measuredBits = [];
    for (let i = 0; i < aliceBits.length; i++) {
        if (aliceBases[i] === bobBases[i]) {
            // If bases match, Bob gets Alice's bit
            measuredBits.push(aliceBits[i]);
        } else {
            // If bases don't match, Bob gets a random bit
            measuredBits.push(Math.floor(Math.random() * 2));
        }
    }
    return measuredBits;
}

// Function to determine the shared key
function getSharedKey(aliceBases, bobBases, aliceBits, bobBits) {
    let sharedKey = [];
    for (let i = 0; i < aliceBases.length; i++) {
        if (aliceBases[i] === bobBases[i] && aliceBits[i] === bobBits[i]) {
            sharedKey.push(aliceBits[i]);
        }
    }
    return sharedKey;
}

// Function to start the QKD simulation
function startSimulation() {
    const aliceBits = generateRandomBits(BIT_LENGTH);
    const aliceBases = generateRandomBases(BIT_LENGTH);
    const bobBases = generateRandomBases(BIT_LENGTH);

    // Bob measures Alice's transmitted bits
    const bobBits = measureBits(aliceBits, aliceBases, bobBases);

    // Determine the shared key
    const sharedKey = getSharedKey(aliceBases, bobBases, aliceBits, bobBits);

    // Display the results
    document.getElementById("aliceBits").innerText = aliceBits.join(", ");
    document.getElementById("aliceBases").innerText = aliceBases.join(", ");
    document.getElementById("bobBases").innerText = bobBases.join(", ");
    document.getElementById("bobBits").innerText = bobBits.join(", ");
    document.getElementById("sharedKey").innerText = sharedKey.join(", ");

    document.getElementById("status").innerText = "QKD Simulation Complete!";
}

// Add event listener to the start button
document.getElementById("startBtn").addEventListener("click", startSimulation);
