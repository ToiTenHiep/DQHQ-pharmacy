// RobotDQHQ.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Send, Phone, X, MessageSquare } from "lucide-react";

/**
 * RobotDQHQ - full SVG + mini chat
 * Colors: primary #0441E7, accent #FF0579, bg #FFFDF8
 *
 * Paste this file into your project and import where cần.
 */
export default function RobotDQHQ({ size = "200px" }) {
  const COLORS = {
    primary: "#0441E7",
    accent: "#FF0579",
    bg: "#FFFDF8",
    textDark: "#080B6A",
  };

  const [visible, setVisible] = useState(false); // small speech bubble
  const [chatOpen, setChatOpen] = useState(false); // mini chat panel
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Chào bạn! Mình là DQHQ, cần mình giúp gì?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const rotationMessages = [
    "Có gì không hiểu, hãy hỏi mình nè! ^^",
    "Bạn có khỏe không? >_<",
    "Nhớ giữ gìn và chăm sóc sức khỏe đúng cách nhé! >_<",
    "Đừng hút thuốc nữa!!!",
    "Ăn rau xanh rất tốt nè! >///<",
  ];

  const intervalRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const startTimeoutRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const showRandomMessage = () => {
      if (!mounted) return;
      const msg = rotationMessages[Math.floor(Math.random() * rotationMessages.length)];
      setCurrentMessage(msg);
      setVisible(true);
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
      }, 3000);
    };
    startTimeoutRef.current = setTimeout(() => {
      if (!mounted) return;
      showRandomMessage();
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(showRandomMessage, 5000);
    }, 1200);

    return () => {
      mounted = false;
      clearTimeout(startTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (chatOpen) {
      setTimeout(() => {
        const el = chatRef.current?.querySelector("input");
        if (el) el.focus();
      }, 260);
    }
  }, [chatOpen]);

  const sendMessage = (text) => {
    if (!text?.trim()) return;
    const newMsg = { id: Date.now(), from: "user", text: text.trim() };
    setMessages((m) => [...m, newMsg]);
    setInput("");
    simulateBotReply(text.trim());
  };

  const simulateBotReply = (userText) => {
    setTyping(true);
    const small = userText.toLowerCase();
    let reply = "Mình đã nhận được tin nhắn của bạn. Mình sẽ giúp bạn sớm nhé!";
    if (small.includes("giá") || small.includes("bao nhiêu")) {
      reply = "Bạn cần xem giá sản phẩm nào? Gửi tên sản phẩm hoặc mã giúp mình nhé.";
    } else if (small.includes("tư vấn") || small.includes("tư vấn thuốc")) {
      reply = "Bạn có thể mô tả triệu chứng hoặc gửi tên thuốc bạn đang dùng.";
    } else if (small.includes("xin chào") || small.includes("chào")) {
      reply = "Chào bạn! Mình có thể hỗ trợ tra giá, tư vấn cơ bản, hoặc kết nối tổng đài.";
    }

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: reply }]);
    }, 900 + Math.min(1600, userText.length * 60));
  };

  const quickCall = () => {
    window.location.href = "tel:+84123456789";
  };
  const openFAQ = () => {
    window.open("/faq", "_blank");
  };
  const requestConsult = () => {
    setMessages((m) => [...m, { id: Date.now(), from: "user", text: "Tôi muốn yêu cầu tư vấn" }]);
    simulateBotReply("Yêu cầu tư vấn");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(input);
    }
    if (e.key === "Escape") {
      setChatOpen(false);
    }
  };

  return (
    <>
      {/* Container fixed bottom-right */}
      <div className="fixed z-50 flex items-end justify-end bottom-5 right-5">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-[340px] max-w-[90vw] rounded-2xl border"
              style={{
                borderColor: "rgba(4,65,231,0.08)",
                background: COLORS.bg,
                boxShadow: "0 14px 40px rgba(4,65,231,0.12)",
                marginBottom: "12px",
              }}
              ref={chatRef}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 rounded-t-2xl"
                style={{ background: COLORS.primary }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                    <MessageSquare size={18} className="text-[#FF0579]" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-semibold">Robot DQHQ</div>
                    <div className="text-xs opacity-80">Sẵn sàng hỗ trợ — Trực tuyến</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { quickCall(); }}
                    aria-label="Gọi tổng đài"
                    className="p-1 text-xs text-white rounded-md bg-white/20 hover:bg-white/30"
                    title="Gọi tổng đài"
                  >
                    <Phone size={16} />
                  </button>
                  <button
                    onClick={() => setChatOpen(false)}
                    aria-label="Đóng chat"
                    title="Đóng"
                    className="p-1 text-xs text-white rounded-md bg-white/20 hover:bg-white/30"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="px-3 py-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300" style={{ background: COLORS.bg }}>
                <div className="flex flex-col gap-3">
                  {messages.map((m) => (
                    <div key={m.id} className={`max-w-[85%] ${m.from === "bot" ? "self-start" : "self-end"}`}>
                      <div
                        className={`px-3 py-2 rounded-xl break-words text-sm`}
                        style={{
                          background: m.from === "bot" ? "white" : COLORS.primary,
                          color: m.from === "bot" ? COLORS.textDark : "#fff",
                          boxShadow: m.from === "bot" ? "0 6px 18px rgba(4,65,231,0.04)" : "0 6px 18px rgba(4,65,231,0.12)",
                        }}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {typing && (
                    <div className="self-start">
                      <div className="px-3 py-2 rounded-xl bg-white text-sm text-[#080B6A]">
                        <span className="opacity-60">...</span> Đang nhập...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex items-center gap-2 px-3 py-2 border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                <button
                  onClick={() => { setInput("Tư vấn thuốc"); sendMessage("Tư vấn thuốc"); }}
                  className="px-3 py-1 text-xs border rounded-lg"
                  style={{ borderColor: COLORS.primary, color: COLORS.primary, background: "white" }}
                >
                  Tư vấn thuốc
                </button>
                <button
                  onClick={() => { setInput("Xem chương trình khuyến mãi"); sendMessage("Xem chương trình khuyến mãi"); }}
                  className="px-3 py-1 text-xs border rounded-lg"
                  style={{ borderColor: COLORS.accent, color: COLORS.accent, background: "white" }}
                >
                  Khuyến mãi
                </button>
                <button
                  onClick={openFAQ}
                  className="px-3 py-1 ml-auto text-xs bg-white rounded-lg"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  FAQ
                </button>
              </div>

              {/* Input */}
              <div className="px-3 py-3 border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tin nhắn..."
                    className="flex-1 px-3 py-2 text-sm outline-none rounded-xl"
                    style={{ background: "white", border: "1px solid rgba(0,0,0,0.04)" }}
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    aria-label="Gửi"
                    className="p-2 rounded-lg"
                    style={{
                      background: COLORS.primary,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot button (full SVG) */}
        <motion.button
          onClick={() => setChatOpen((s) => !s)}
          aria-label="Mở chat DQHQ"
          title="Mở chat DQHQ"
          className="p-0 ml-3 rounded-full"
          style={{
            width: size,
            height: size,
            background: "transparent",
            border: "none",
            pointerEvents: "auto",
          }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: size, height: size }}
          >
            <AnimatePresence mode="sync">
              {visible && !chatOpen && (
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, y: 10, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-[200px] mb-2 rounded-[10px] px-4 py-2 shadow-lg text-sm border"
                  style={{
                    maxWidth: "220px",
                    textAlign: "left",
                    lineHeight: "1.4",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    pointerEvents: "auto",
                    borderColor: "rgba(4,65,231,0.12)",
                    background: "white",
                    color: COLORS.textDark,
                  }}
                >
                  {currentMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full original SVG (unchanged) */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 279.2553 298.6596"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{
                filter:
                  "drop-shadow(0px 6px 10px rgba(91,0,248,0.18)) drop-shadow(0px 2px 6px rgba(0,255,188,0.12))",
                pointerEvents: "auto",
              }}
              role="img"
              aria-label="Robot DQHQ"
            >
              {/* HEAD group */}
              <motion.g
                id="head"
                style={{ transformBox: "fill-box", transformOrigin: "50% 35%" }}
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="m65.6307,132.0266c-2.2398,2.6699-7.3457,4.3534-12.7917,4.2321-5.0537-.1125-9.59-1.7611-11.6524-4.2321-3.5363-5.1663-7.9119-13.6354-7.0266-24.1835.6533-7.783,3.9574-14.1545,7.0266-18.6213,1.4837-3.0994,6.9089-5.2205,12.8054-5.0785,5.4911.1322,10.2735,2.2,11.6387,5.0785v42.8048Z"
                          fill="#0441e7"
                          strokeWidth="0"
                        />
                        <path
                          d="m207.0149,88.3749c2.2398-2.6699,7.3457-4.3534,12.7917-4.2321,5.0537.1125,9.59,1.7611,11.6524,4.2321,3.5363,5.1663,7.9119,13.6354,7.0266,24.1835-.6533,7.783-3.9574,14.1545-7.0266,18.6213-1.4837,3.0994-6.9089,5.2205-12.8054,5.0785-5.4911-.1322-10.2735-2.2-11.6387-5.0785v-42.8048Z"
                          fill="#0441e7"
                          strokeWidth="0"
                        />
                      </g>
                      <path
                        d="m210.8183,148.8703c-14.1352,17.5418-39.7593,23.8648-45.431,25.2331-12.1469,2.9307-23.6092,3.0182-28.7071,3.0309-5.1653.0128-16.9461-.0201-29.4092-3.0309-5.9123-1.4283-31.336-7.7244-45.4444-25.2331-26.6083-33.021-12.5004-84.3589,20.0329-107.7879,20.7917-14.975,44.6903-15.3182,54.463-14.9208,9.7726-.3975,33.6712-.0542,54.481,14.9208,32.5152,23.4291,46.6232,74.7669,20.0149,107.7879Z"
                        fill="#fff"
                        stroke="#ff0074"
                        strokeMiterlimit="10"
                      />
                    </g>
                    <g>
                      <path
                        d="m118.5816,175.3578c-11.8583-1.5745-21.1901-4.6404-27.5956-7.2256-4.9994-2.0176-10.9985-4.4855-17.8334-9.5316-2.9499-2.1779-7.7897-5.8086-12.4526-12.0683-3.403-4.5683-5.4887-8.895-6.7644-12.0683,9.3523,8.148,18.7045,16.296,28.0568,24.4441,12.1964,5.4833,24.3928,10.9665,36.5892,16.4498Z"
                        fill="#eef3ff"
                        strokeWidth="0"
                      />
                      <path
                        d="m153.6334,175.3578c11.8583-1.5745,21.1901-4.6404,27.5956-7.2256,4.9994-2.0176,10.9985-4.4855,17.8334-9.5316,2.9499-2.1779,7.7897-5.8086,12.4526-12.0683,3.403-4.5683,5.4887-8.895,6.7644-12.0683-9.3523,8.148-18.7045,16.296-28.0568,24.4441-12.1964,5.4833-24.3928,10.9665-36.5892,16.4498Z"
                        fill="#eef3ff"
                        strokeWidth="0"
                      />
                    </g>
                  </g>
                  <path
                    d="m190.5148,146.5857c-9.4742,6.2927-19.4039,6.3847-22.3994,6.4127-15.7338.1471-17.7787-8.5199-31.7926-8.5199s-16.0588,8.667-31.7926,8.5199c-2.9955-.028-12.9252-.12-22.3994-6.4127-14.6318-9.7184-21.8394-25.3618-18.1724-38.3137,3.1974-11.3623,13.7648-17.0345,16.8357-18.6782,6.1759-3.3058,16.2872-2.541,36.2002-1.6258,8.0262.3689,11.306.7807,19.3285.7807s11.3023-.4118,19.3285-.7807c19.913-.9152,30.0243-1.68,36.2002,1.6258,3.0709,1.6438,13.6383,7.3159,16.8357,18.6782,3.667,12.9519-3.5406,28.5952-18.1724,38.3137Z"
                    fill="#ffe9e9"
                    strokeWidth="0"
                  />
                  <path
                    d="m148.4281,62.1448v2.1207c0,.9849-.7984,1.7832-1.7832,1.7832h-5.7067c-.9849,0-1.7832.7984-1.7832,1.7832v5.6838c0,.9849-.7984,1.7832-1.7832,1.7832h-2.0979c-.9849,0-1.7832-.7984-1.7832-1.7832v-5.6838c0-.9849-.7984-1.7832-1.7832-1.7832h-5.7067c-.9849,0-1.7832-.7984-1.7832-1.7832v-2.1207c0-.9849.7984-1.7832,1.7832-1.7832h5.7067c.9849,0,1.7832-.7984,1.7832-1.7832v-5.7067c0-.9849.7984-1.7832,1.7832-1.7832h2.0979c.9849,0,1.7832.7984,1.7832,1.7832v5.7067c0,.9849.7984,1.7832,1.7832,1.7832h5.7067c.9849,0,1.7832.7984,1.7832,1.7832Z"
                    fill="#ff0074"
                    strokeWidth="0"
                  />
                </g>

                {/* Eyes group */}
                <motion.g
                  id="eyes-group"
                  style={{ transformBox: "fill-box", transformOrigin: "50% 45%" }}
                  animate={{ x: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.ellipse
                    id="left-eye"
                    cx="95.8893"
                    cy="121.1107"
                    rx="17.7252"
                    ry="19.5058"
                    fill="#ff0074"
                    strokeWidth="0"
                    style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                    animate={{ scaleY: [1, 0.12, 1] }}
                    transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    id="right-eye"
                    d="m177.4826,140.6165c9.7893,0,17.7252-8.733,17.7252-19.5058s-7.9358-19.5058-17.7252-19.5058c-9.7893,0-17.7252,8.733-17.7252,19.5058,0,10.7728,7.9358,19.5058,17.7252,19.5058Z"
                    fill="#ff0074"
                    strokeWidth="0"
                    style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                    animate={{ scaleY: [1, 0.12, 1] }}
                    transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 3.7, ease: "easeInOut" }}
                  />
                </motion.g>
              </motion.g>

              {/* BODY */}
              <motion.g
                id="body"
                style={{ transformBox: "fill-box", transformOrigin: "50% 70%" }}
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="136.686" cy="205.0554" r="17.1143" fill="#0441e7" strokeWidth="0" />
                <ellipse cx="136.686" cy="233.189" rx="32.0176" ry="27.4848" fill="#0441e7" strokeWidth="0" />
                <path
                  d="m177.7635,251.8447h-35.7305c-.4336,0-.8491-.1626-1.1742-.4878l-2.9986-2.9986c-.6504-.6503-1.698-.6503-2.3484,0l-2.9986,2.9986c-.3251.3251-.7406.4878-1.1742.4878h-35.7305c-1.12,0-1.9148-1.1019-1.5716-2.1677l13.4938-40.5897-2.5109-15.8422c-.0903-.6142.3613-1.2103,1.0117-1.3007l8.1107-1.2463s0-.0181.0181-.0181l1.1019-.1626c.0722-.0181.1265-.0181.1987-.0181h5.2747c.4335,0,.8491.1626,1.1561.4697l13.6202,13.6202c.6504.6504,1.698.6504,2.3484,0l13.6202-13.6202c.3071-.3071.7226-.4697,1.1561-.4697h5.2747c.0722,0,.1265,0,.1987.0181l1.1019.1626c.0181,0,.0181.0181.0181.0181l8.1107,1.2463c.6504.0904,1.102.6864,1.0117,1.3007l-2.5109,15.8422,13.4938,40.5897c.3432,1.0658-.4516,2.1677-1.5716,2.1677Z"
                  fill="#fff"
                  stroke="#ff0074"
                  strokeMiterlimit="10"
                />

                <g>
                  <path d="m124.587,239.6937c-.0419.4044-.3495.7266-.7543.7642-2.4805.2299-5.531.3037-8.9826-.0732-3.2408-.3539-6.0431-1.0186-8.3195-1.7202-.3883-.1197-.6244-.4983-.5826-.9025l.2286-2.2049c.0559-.5388.5832-.884,1.1001-.7222,2.2086.6913,4.9406,1.3461,8.1072,1.6829,3.2637.3472,6.1509.2674,8.5043.0389.539-.0523.9832.3936.9273.9323l-.2286,2.2047Z" fill="#ff0074" strokeWidth="0"/>
                  <path d="m148.7849,239.6937c.0419.4044.3495.7266.7543.7642,2.4805.2299,5.531.3037,8.9826-.0732,3.2408-.3539,6.0431-1.0186,8.3195-1.7202.3883-.1197.6244-.4983.5826-.9025l-.2286-2.2049c-.0559-.5388-.5832-.884-1.1001-.7222-2.2086.6913-4.9406,1.3461-8.1072,1.6829-3.2637.3472-6.1509.2674-8.5043.0389-.539-.0523-.9832.3936-.9273.9323l.2286,2.2047Z" fill="#ff0074" strokeWidth="0"/>
                </g>
              </motion.g>

              {/* LEFT HAND */}
              <motion.g
                id="left-hand"
                style={{ transformBox: "fill-box", transformOrigin: "27% 72%" }}
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="m76.8925,216.9279c-3.2777-2.8331-3.638-7.787-.8049-11.0646,2.8134-3.2547,7.9068-1.7276,11.0646-.805,1.7517.5119,6.979,2.0392,7.2179,4.9705.2445,3.0004-4.9066,5.3941-6.4129,6.0941-2.897,1.3463-7.7721,3.6509-11.0646.8049Z" fill="#fff" stroke="#ff0074" strokeMiterlimit="10" />
                <path d="m76.2523,211.1179c-.2662-3.6355,3.4921-6.0583,3.9073-5.6392.3326.3358-1.55,2.4245-1.2839,5.5754.2574,3.0477,2.3246,4.7149,2.0589,5.0781-.3413.4666-4.416-1.3769-4.6823-5.0143Z" fill="#ffe3f1" strokeWidth="0" />
              </motion.g>

              {/* RIGHT HAND */}
              <motion.g
                id="right-hand"
                style={{ transformBox: "fill-box", transformOrigin: "68% 69%" }}
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="m195.4665,206.5702c2.0634,3.8095.6479,8.5704-3.1616,10.6338-3.7829,2.0489-8.0067-1.1814-10.6338-3.1615-1.4574-1.0985-5.8062-4.3764-4.9926-7.2026.8328-2.8928,6.4976-3.3094,8.1542-3.4312,3.186-.2343,8.5611-.6652,10.6338,3.1616Z" fill="#fff" stroke="#ff0074" strokeMiterlimit="10"/>
                <path d="m194.0099,212.231c-1.0372,3.4946-5.4096,4.4311-5.6497,3.8921-.1923-.4317,2.3075-1.7194,3.1733-4.7606.8374-2.9416-.5062-5.2323-.1292-5.4781.4843-.3157,3.6433,2.8502,2.6056,6.3466Z" fill="#ffe3f1" strokeWidth="0"/>
              </motion.g>
            </motion.svg>

            {/* online dot */}
            <div
              className="absolute flex items-center justify-center w-6 h-6 rounded-full -right-1 -bottom-1"
              style={{
                background: COLORS.accent,
                border: "2px solid white",
                boxShadow: "0 6px 14px rgba(4,65,231,0.12)",
              }}
            />
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
