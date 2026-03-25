import type { TechItem } from "../types/content";

export const SKILL_LEVELS: Record<number, string> = {
	1: "Iniciante",
	2: "Básico",
	3: "Intermediário",
	4: "Avançado",
	5: "Especialista",
};

export const stack: TechItem[] = [
	{
		name: "React.js",
		category: "Frontend",
		icon: "simple-icons:react",
		iconColor: "#61DAFB",
		level: 5,
	},
	{
		name: "React Native",
		category: "Mobile",
		icon: "simple-icons:react",
		iconColor: "#61DAFB",
		level: 4,
	},
	{
		name: "TypeScript",
		category: "Linguagem",
		icon: "simple-icons:typescript",
		iconColor: "#3178C6",
		level: 4,
	},
	{
		name: "Node.js",
		category: "Backend",
		icon: "simple-icons:nodedotjs",
		iconColor: "#5FA04E",
		level: 3,
	},
	{
		name: "SQL Server",
		category: "Banco de Dados",
		icon: "simple-icons:microsoftsqlserver",
		iconColor: "#CC2927",
		level: 4,
	},
	{
		name: "Oracle DB",
		category: "Banco de Dados",
		icon: "simple-icons:oracle",
		iconColor: "#F80000",
		level: 4,
	},
];

export const extras: string[] = [
	"REST APIs",
	"Webhooks",
	"Push Notification",
	"Git",
	"Android / iOS",
	"Play Store / App Store",
	"CRM",
	"Integrações Bancárias",
	"Astro",
];
