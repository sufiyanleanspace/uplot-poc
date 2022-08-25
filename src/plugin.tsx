import placement from "./placement";
function tooltipPlugin() {
  let over: HTMLElement, bound: Element, bLeft: number, bTop: number;

  function syncBounds() {
    let bbox = over.getBoundingClientRect();
    bLeft = bbox.left;
    bTop = bbox.top;
  }

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.display = "none";
  overlay.style.position = "absolute";
  document.body.appendChild(overlay);

  return {
    hooks: {
      init: (u: any) => {
        over = u.over;
        bound = over;
        over.onmouseenter = () => {
          overlay.style.display = "block";
        };
        over.onmouseleave = () => {
          overlay.style.display = "none";
        };
      },
      setSize: () => {
        syncBounds();
      },
      setCursor: (u: any) => {
        const { left, top, idx } = u.cursor;
        const x = u.data[0][idx];
        const y = u.data[1][idx];
        if (!x || !y) return;
        const anchor = { left: left + bLeft, top: top + bTop };
        overlay.innerHTML = `<div style="
        background-color: grey;
        padding: 10px;
        color: white;
        ">${x},${y} at ${Math.round(left)},${Math.round(top)}</div>`;
        placement(overlay, anchor, "top", "right", bound);
      }
    }
  };
}
export default tooltipPlugin;
