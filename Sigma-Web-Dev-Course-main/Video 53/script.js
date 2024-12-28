const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('textInput');

// Function to draw ruled lines for the A4 sheet look
function drawRuledSheet() {
    ctx.strokeStyle = '#dcdcdc';
    ctx.lineWidth = 0.5;
    const lineSpacing = 40; // Adjusted for more realistic spacing
    const numLines = Math.floor(canvas.height / lineSpacing);

    // Draw horizontal lines
    for (let i = 0; i < numLines; i++) {
        const y = i * lineSpacing + 50; // Offset for top margin
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(canvas.width - 50, y);
        ctx.stroke();
    }

    // Draw a vertical margin line
    ctx.strokeStyle = '#dcdcdc';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, canvas.height);
    ctx.stroke();
}

// Function to wrap text to fit within the canvas width
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    words.forEach(word => {
        const testLine = currentLine + word + ' ';
        const testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxWidth && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    });

    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines;
}

// Function to render text on the canvas with realistic spacing and uneven gaps
function renderTextToCanvas() {
    const gibberishText = textInput.value.trim();
    if (gibberishText.length > 0) {
        const lines = wrapText(ctx, gibberishText, canvas.width - 60);
        drawRuledSheet();

        ctx.fillStyle = "#000";
        ctx.font = "20px 'Patrick Hand', cursive"; // Font choice for handwritten text

        let currentY = 50;
        lines.forEach((line, index) => {
            let currentX = 60;
            for (let i = 0; i < line.length; i++) {
                // Random offsets for more realistic handwriting
                const randomOffsetX = Math.random() * 1 - 0.5; // Small random offset
                const randomOffsetY = Math.random() * 1 - 0.5;
                const randomFontSize = 20 + Math.random() * 2; // Slight variation in font size for realism
                
                // Set a randomized font size
                ctx.font = `${randomFontSize}px 'Patrick Hand', cursive`;

                // Draw each character with the small offset
                ctx.fillText(line[i], currentX + randomOffsetX, currentY + randomOffsetY);
                currentX += ctx.measureText(line[i]).width;

                // Randomly add space between words or not
                if (line[i] === ' ') {
                    const spaceOffset = Math.random() < 0.3 ? Math.random() * 5 : 0; // 30% chance of a larger space
                    currentX += spaceOffset;
                }
            }
            currentY += 28 + Math.random() * 2; // Add slight randomness to line spacing for realism
        });
    }
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRuledSheet(); // Redraw the ruled lines after clearing
}

// Event listener to trigger rendering when user types in the input
textInput.addEventListener('input', renderTextToCanvas);
