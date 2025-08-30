const chessBoard = document.getElementById('chessBoard');

for (let lin = 0; lin < 8; lin++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const isLight = (lin + col) % 2 === 0;

        if (isLight) {
            square.classList.add('light');
        } else {
            square.classList.add('dark');
        }
        
        square.setAttribute('id', `${lin}${col}`);
        
        if (lin === 1) {
            const piece = document.createElement('img');
            piece.setAttribute('src', 'pieces/images/blackPawn.png');
            piece.setAttribute('class', 'piece');
            piece.setAttribute('draggable', true);
            piece.setAttribute('id', `b_pawn_${lin}${col}`);
            square.appendChild(piece);
        }

        if (lin === 6) { 
            const piece = document.createElement('img');
            piece.setAttribute('src', 'pieces/images/whitePawn.png');
            piece.setAttribute('class', 'piece');
            piece.setAttribute('draggable', true);
            piece.setAttribute('id', `w_pawn_${lin}${col}`);
            square.appendChild(piece);
        }

        chessBoard.appendChild(square);
    }
}