export default function getPositionScroll (value) {
    let distance = document.querySelector(`.${value}`).getClientRects();
    return distance[0].top;
}