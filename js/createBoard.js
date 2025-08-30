const chessBoard = document.getElementById('chessBoard');


//cria o tabuleiro (pela visao de qm ta de brancas)
    //podia ser function, mas como só vai rodar uma vez, n precisa.
    //mais pra frente se tiver rematch e coisarada fica massa botar numa function, mas por enquanto n precisa.
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

        if (lin == 0) {
            const piece = document.createElement('img');
            switch (col) {
                case 0:
                case 7:
                    piece.setAttribute('src', 'images/blackRook.png');
                    piece.setAttribute('id', `b_rook_${lin}${col}`);
                    break;
                case 1:
                case 6:
                    piece.setAttribute('src', 'images/blackKnight.png');
                    piece.setAttribute('id', `b_knight_${lin}${col}`);
                    break;
                case 2:
                case 5:
                    piece.setAttribute('src', 'images/blackBishop.png');
                    piece.setAttribute('id', `b_bishop_${lin}${col}`);
                    break;
                case 3:
                    piece.setAttribute('src', 'images/blackQueen.png');
                    piece.setAttribute('id', `b_queen_${lin}${col}`);
                    break;
                case 4:
                    piece.setAttribute('src', 'images/blackKing.png');
                    piece.setAttribute('id', `b_king`);
                    break;
                default:
                break;
            }
        piece.setAttribute('draggable', true);
        piece.setAttribute('class', 'piece');
        square.appendChild(piece)
        }

        if (lin == 7) {
            const piece = document.createElement('img');
            switch (col) {
                case 0:
                case 7:
                    piece.setAttribute('src', 'images/whiteRook.png');
                    piece.setAttribute('id', `w_rook_${lin}${col}`);
                    break;
                case 1:
                case 6:
                    piece.setAttribute('src', 'images/whiteKnight.png');
                    piece.setAttribute('id', `w_knight_${lin}${col}`);
                    break;
                case 2:
                case 5:
                    piece.setAttribute('src', 'images/whiteBishop.png');
                    piece.setAttribute('id', `w_bishop_${lin}${col}`);
                    break;
                case 3:
                    piece.setAttribute('src', 'images/whiteQueen.png');
                    piece.setAttribute('id', `w_queen_${lin}${col}`);
                    break;
                case 4:
                    piece.setAttribute('src', 'images/whiteKing.png');
                    piece.setAttribute('id', `w_king`);
                    break;
                default:
                break;
            }
        piece.setAttribute('draggable', true);
        piece.setAttribute('class', 'piece');
        square.appendChild(piece)
        }
        
        //cria os peao preto
        if (lin == 1) {
            const piece = document.createElement('img');
            piece.setAttribute('src', 'images/blackPawn.png');
            piece.setAttribute('class', 'piece');
            piece.setAttribute('draggable', true);
            piece.setAttribute('id', `b_pawn_${lin}${col}`);
            square.appendChild(piece);
        }

        //cria os peao branco
        if (lin == 6) { 
            const piece = document.createElement('img');
            piece.setAttribute('src', 'images/whitePawn.png');
            piece.setAttribute('class', 'piece');
            piece.setAttribute('draggable', true);
            piece.setAttribute('id', `w_pawn_${lin}${col}`);
            square.appendChild(piece);
        }

        chessBoard.appendChild(square);
    }
    //essa criacao precisa ser URGENTEMENTE otimizada e organizada, ta mt feia, fiz assim pq to sem tempo
    //mas ORGANIZE depois, pelo amor de Deus :)
}

//adiciona a função de botar imagem nos quadrado
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
});
