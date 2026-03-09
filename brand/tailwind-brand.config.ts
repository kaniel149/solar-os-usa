import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
  theme: {
    extend: {
      // ─── Colors ──────────────────────────────────────
      colors: {
        // Primary
        navy: {
          DEFAULT: "#1B2E4A",
          50: "#E8EDF4",
          100: "#D1DBE9",
          200: "#A3B7D3",
          300: "#7593BD",
          400: "#476FA7",
          500: "#1B2E4A",
          600: "#17273F",
          700: "#131F34",
          800: "#0F1829",
          900: "#0B101E",
          950: "#070A13",
        },
        sunshine: {
          DEFAULT: "#F5A623",
          50: "#FEF7E8",
          100: "#FDEFD1",
          200: "#FBDFA3",
          300: "#F9CF75",
          400: "#F7BF47",
          500: "#F5A623",
          600: "#E09610",
          700: "#CC8508",
          800: "#9A6406",
          900: "#684304",
          950: "#4F3303",
        },
        sky: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        palm: {
          DEFAULT: "#16A34A",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16",
        },
        // Semantic
        success: {
          DEFAULT: "#16A34A",
          light: "#DCFCE7",
          dark: "#166534",
        },
        warning: {
          DEFAULT: "#EAB308",
          light: "#FEF9C3",
          dark: "#854D0E",
        },
        error: {
          DEFAULT: "#DC2626",
          light: "#FEE2E2",
          dark: "#991B1B",
        },
        info: {
          DEFAULT: "#3B82F6",
          light: "#DBEAFE",
          dark: "#1E40AF",
        },
        // Neutral (Slate scale)
        surface: {
          DEFAULT: "#FFFFFF",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },

      // ─── Typography ──────────────────────────────────
      fontFamily: {
        display: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        display: [
          "3rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h1: [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: [
          "1.875rem",
          { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        h3: [
          "1.5rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        h4: [
          "1.25rem",
          { lineHeight: "1.35", letterSpacing: "0", fontWeight: "600" },
        ],
        h5: [
          "1rem",
          { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" },
        ],
        h6: [
          "0.875rem",
          { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "600" },
        ],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" },
        ],
        overline: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "600" },
        ],
      },

      // ─── Spacing (4px grid, extending defaults) ──────
      spacing: {
        "0.5": "2px",
        "1": "4px",
        "1.5": "6px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "12": "48px",
        "14": "56px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "28": "112px",
        "32": "128px",
      },

      // ─── Border Radius ───────────────────────────────
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      },

      // ─── Shadows ─────────────────────────────────────
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.05)",
        sm: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)",
        lg: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
        xl: "0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)",
        glow: "0 0 20px rgba(245,166,35,0.3)",
        "glow-lg": "0 0 40px rgba(245,166,35,0.4)",
        inner: "inset 0 2px 4px rgba(0,0,0,0.06)",
        none: "none",
      },

      // ─── Animations ──────────────────────────────────
      transitionDuration: {
        micro: "150ms",
        small: "200ms",
        medium: "300ms",
        large: "400ms",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "check-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-out",
        "fade-in-up": "fade-in-up 400ms ease-out",
        "scale-in": "scale-in 300ms ease-out",
        "slide-down": "slide-down 200ms ease-out",
        "slide-up": "slide-up 200ms ease-out",
        shimmer: "shimmer 2s linear infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "check-pop": "check-pop 300ms ease-out",
      },

      // ─── Misc ────────────────────────────────────────
      maxWidth: {
        prose: "65ch",
        container: "1200px",
        "container-lg": "1400px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
