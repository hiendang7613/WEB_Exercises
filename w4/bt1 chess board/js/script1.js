// Set up chess pieces to a chessboard
window.onload = function () {
  $(".chess-piece").each((index, element) => {
    if (index < 8) {
      element.style.gridColumn = index + 1 + "/" + (index + 2);
      element.style.gridRow = 1 + "/" + 2;
    } else if (index < 16) {
      element.style.gridColumn = index + 1 - 8 + "/" + (index + 2 - 8);
      element.style.gridRow = 2 + "/" + 3;
    } else if (index < 24) {
      element.style.gridColumn = index + 1 - 16 + "/" + (index + 2 - 16);
      element.style.gridRow = 7 + "/" + 8;
    } else {
      element.style.gridColumn = index + 1 - 24 + "/" + (index + 2 - 24);
      element.style.gridRow = 8 + "/" + 9;
    }

    // set draggable to chess pieces
    setupDragDrop(element);
  });
};

// Drag and drop a chess piece
function setupDragDrop(obj) {
  $(obj).mousedown(function (e) {
    this.oldX = e.clientX;
    this.oldY = e.clientY;
    this.isDown = true;
    obj.style.zIndex = "1";
  });
  $(obj).mouseup(function (e) {
    this.isDown = false;
    let dCol = Math.round(this.style.left.slice(0, -2) / 70);
    let dRow = Math.round(this.style.top.slice(0, -2) / 70);
    this.oldCol = parseInt(this.style.gridColumn[0]);
    this.oldRow = parseInt(this.style.gridRow[0]);
    if (checkPosition(obj, dCol, dRow)) {
      if (IsKick(obj, obj.oldCol + dCol, obj.oldRow + dRow) != -1) {
        this.style.gridColumn =
          this.oldCol + dCol + "/" + (this.oldCol + dCol + 1);
        this.style.gridRow =
          this.oldRow + dRow + "/" + (this.oldRow + dRow + 1);
      }
    }
    this.style.left = "0px";
    this.style.top = "0px";
    obj.style.zIndex = "0";
  });
  $(obj).mousemove(function (e) {
    if (this.isDown) {
      let dx = e.clientX - this.oldX;
      let dy = e.clientY - this.oldY;
      this.style.left = dx + "px";
      this.style.top = dy + "px";
    }
  });
}

// Check new position can move to
function checkPosition(obj, dCol, dRow) {
  if (dCol == 0 && dRow == 0) return false;

  let chess_type = obj.getAttribute("data-chess-type");
  switch (chess_type) {
    case "rook":
      if (dCol != 0 && dRow != 0) {
        return false;
      }
      break;

    case "knight":
      if (dCol ** 2 + dRow ** 2 != 5) {
        return false;
      }
      break;

    case "bishop":
      if (dCol ** 2 != dRow ** 2) {
        return false;
      }
      break;
    case "king":
      if (dCol ** 2 + dRow ** 2 > 2) {
        return false;
      }
      break;
    case "queen":
      if (dCol == 0 || dRow == 0 || dCol ** 2 == dRow ** 2) {
        break;
      }
      return false;
    case "pawn":
      if (dCol == 1 || dCol == -1) {
        if (obj.classList.contains("white") && dRow == 1) {
          return true;
        } else if (obj.classList.contains("black") && dRow == -1) {
          return true;
        }
      }

      if (dCol != 0) return false;
      if (obj.classList.contains("white") && dRow != 1 && dRow != 2)
        return false;
      else if (obj.classList.contains("black") && dRow != -1 && dRow != -2)
        return false;
      break;
    default:
      break;
  }
  if (IsBlocked(obj, dCol, dRow)) {
    return false;
  } else {
    return true;
  }
}

// Can kick ?
function IsKick(obj, Col, Row) {
  var elements = $(".chess-piece");
  for (let i = 0; i < elements.length; i++) {
    if (
      parseInt(elements[i].style.gridColumn[0]) == Col &&
      parseInt(elements[i].style.gridRow[0]) == Row
    ) {
      if (
        obj.getAttribute("data-chess-type") == "pawn" &&
        parseInt(obj.style.gridColumn[0]) == Col
      )
        return -1;
      if (
        (elements[i].classList.contains("white") &&
          obj.classList.contains("white")) ||
        (elements[i].classList.contains("black") &&
          obj.classList.contains("black"))
      )
        return -1;
      elements[i].remove();
      return 1;
    }
  }
  if (
    obj.getAttribute("data-chess-type") == "pawn" &&
    parseInt(obj.style.gridColumn[0]) != Col
  )
    return -1;
  return 0;
}

// New position is blocked?
function IsBlocked(obj, dCol, dRow) {
  var chess_pieces = $(".chess-piece");
  return Array.from(chess_pieces).some((element) => {
    let dCol2 = parseInt(element.style.gridColumn[0]) - obj.oldCol;
    let dRow2 = parseInt(element.style.gridRow[0]) - obj.oldRow;

    if (
      dCol2 * dRow == dRow2 * dCol &&
      ((dCol2 != 0 && dCol / dCol2 > 1) || (dRow2 != 0 && dRow / dRow2 > 1))
    ) {
      return true;
    }
  });
}
