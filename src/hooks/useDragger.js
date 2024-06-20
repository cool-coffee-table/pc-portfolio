import React, { useEffect, useRef } from "react";

function useDragger(id, dragger, isMaximized) {
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    const draggerBtn = document.getElementById(dragger);

    if (!target || !draggerBtn) return;

    const container = target.parentElement;

    const onMouseDown = (e) => {
      target.classList.remove("transition-drag");
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
    };

    const onMouseUp = () => {
      target.classList.add("transition-drag");
      isClicked.current = false;
      const containerRect = container.getBoundingClientRect();
      const draggerBtnRect = draggerBtn.getBoundingClientRect();

      const threshold = 1;
      const shouldResetX =
        draggerBtnRect.left + draggerBtnRect.width >=
          containerRect.width + 120 || draggerBtnRect.left <= -120;

      const shouldResetY =
        draggerBtnRect.top + draggerBtnRect.height >=
          containerRect.height - threshold ||
        draggerBtnRect.top <= threshold ||
        containerRect.height - (draggerBtnRect.top + draggerBtnRect.height) <=
          32; // Check if within 32px of the bottom

      if (shouldResetX || shouldResetY) {
        if (isMaximized) {
          target.style.left = "0";
          target.style.top = "0";
          target.style.bottom = "40px";
          target.style.right = "0";
        } else {
          const containerCenterX =
            containerRect.width / 2 - draggerBtnRect.width / 2;
          const containerCenterY =
            containerRect.height / 2 - draggerBtnRect.height / 2;

          target.style.top = `${containerCenterY}px`;
          target.style.left = `${containerCenterX}px`;

          coords.current.lastX = containerCenterX;
          coords.current.lastY = containerCenterY;
        }
      } else {
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
      }

      
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;

      if (isMaximized) {
        if (nextX > 0) {
          target.style.right = `-${nextX}px`;
          target.style.left = `${nextX}px`;
        } else {
          target.style.right = `${Math.abs(nextX)}px`;
          target.style.left = `${nextX}px`;
        }
      } else {
        target.style.left = `${nextX}px`;
      }
    };

    const onMouseOut = () => {
      if (isClicked.current) {
        isClicked.current = false;
        document.removeEventListener("mousemove", onMouseMove);
      }
    };

    draggerBtn.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseout", onMouseOut);

    const cleanup = () => {
      draggerBtn.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseout", onMouseOut);
    };

    return cleanup;
  }, [id, dragger, isMaximized]);
}

export default useDragger;
