import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const baseImages = [
  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
];

// Giảm bớt số lượng hình (còn 10 hình)
const images = [...baseImages, ...baseImages];

export const FooterFountain = () => {
  const ref = useRef<HTMLDivElement>(null);
  // Thay đổi ngưỡng hiển thị và vùng margin để bắt đầu sớm hơn & ko bị ngắt (false) giữa chừng khi đàn hồi màn hình
  const isInView = useInView(ref, { once: false, amount: 0.1, margin: "0px 0px 100px 0px" });

  const configs = useMemo(() => {
    return images.map((src, i) => {
      // Tỏa góc ngẫu nhiên cho trục X (Horizontal)
      const angleSpread = (Math.random() - 0.5) * 90; // -45vw đến 45vw
      
      // Độ cao Peak của trục Y
      const heightPeak = -(30 + Math.random() * 50);

      // Xoay tròn: Rất nhẹ để tránh rối
      const rotateStart = (Math.random() - 0.5) * 45;
      const rotateEnd = rotateStart + (Math.random() - 0.5) * 120;

      return {
        src,
        xEnd: angleSpread * 1.5, // Rơi rộng hơn trên màn
        yPeak: heightPeak,
        rotateStart,
        rotateEnd,
        // Dồn dập (giảm delay)
        delay: Math.random() * 0.1,
        // Thời gian rơi được nới dài hơn tẹo để làm mượt hoàn toàn ở đỉnh rớt xuống
        // Tổng thời gian được làm ngắn lại để cả chùm bắn nhanh hơn
        duration: 0.8 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    // Dùng inset-0 phủ đầy Footer để lúc over-scroll nó ko trượt đi mất view
    <div ref={ref} className="absolute inset-0 pointer-events-none flex justify-center items-end" style={{ zIndex: 9999 }}>
      {configs.map((config, i) => (
        <motion.img
          key={i}
          src={config.src}
          initial={{ y: "15vh", x: "0vw", rotate: config.rotateStart, opacity: 0 }}
          animate={isInView ? {
            y: ["15vh", `${config.yPeak}vh`, "100vh"], // Rõ 3 waypoint cho trọng lực
            x: ["0vw", `${config.xEnd}vw`], // CHỈ CÓ 2 waypoint để bay đường chéo parabol thẳng, ko bị giựt (kink)
            rotate: [config.rotateStart, config.rotateEnd],
            opacity: [0, 1, 1, 0]
          } : {
            y: "15vh", x: "0vw", rotate: config.rotateStart, opacity: 0
          }}
          transition={{
            // Parabol lực hút cực mượt + bắn lên CỰC NHANH: Lên bằng circOut, xuống bằng easeIn
            // Đỉnh cao đạt được ở 15% thời lượng -> bắn vọt nhanh hơn
            y: { duration: config.duration, delay: config.delay, ease: ["circOut", "easeIn"], times: [0, 0.15, 1] },
            // Bay tạt ra bằng easeOut (giảm tốc dần do ma sát gió)
            x: { duration: config.duration, delay: config.delay, ease: "easeOut" },
            rotate: { duration: config.duration, delay: config.delay, ease: "linear" },
            opacity: { duration: config.duration, delay: config.delay, ease: "linear", times: [0, 0.05, 0.8, 1] }
          }}
          // Kích thước chuẩn
          className="absolute bottom-0 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover shadow-xl backdrop-blur-sm"
          style={{ transformOrigin: "center" }}
        />
      ))}
    </div>
  );
};
