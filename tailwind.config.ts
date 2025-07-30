
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'xs': '475px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			}
		},
		extend: {
			screens: {
				'xs': '475px',
				'3xl': '1920px'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				beige: {
					'50': '#F9EBE0',
					'100': '#F5E0CF',
					'200': '#EECBAC',
					'300': '#E8B68A',
					'400': '#E6B17E',
					'500': '#DFA05D',
					'600': '#D78F3B',
					'700': '#B37B45',
					'800': '#8A5F35',
					'900': '#634425',
				},
				gray: {
					'50': '#F4F4F5',
					'100': '#E4E4E7',
					'200': '#D4D4D8',
					'300': '#A1A1AA',
					'400': '#71717A',
					'500': '#52525B',
					'600': '#3F3F46',
					'700': '#2A2A2A',
					'800': '#1A1A1A',
					'900': '#121212',
				},
				success: '#10B981',
				error: '#EF4444',
				warning: '#F59E0B',
				info: '#3B82F6',
				violet: '#8B5CF6',
				pink: '#EC4899',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.6' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'100%': { transform: 'translateX(100%)' }
				},
				'text-gradient': {
					'0%': { 'background-position': '0% center' },
					'50%': { 'background-position': '100% center' },
					'100%': { 'background-position': '0% center' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'fade-out': 'fade-out 0.4s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'scale-out': 'scale-out 0.3s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
				'slide-out-right': 'slide-out-right 0.3s ease-out forwards',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'shimmer': 'shimmer 2.5s infinite',
				'text-gradient': 'text-gradient 8s ease infinite',
				'marquee': 'marquee 25s linear infinite'
			},
			backgroundSize: {
				'200%': '200% auto',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;