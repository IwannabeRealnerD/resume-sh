type CommandDefinition = {
	description: string;
	action: () => string;
};

export const COMMAND_DEFINITIONS: { [key: string]: CommandDefinition } = {
	about: {
		action: () =>
			"khanne-sh is a terminal  has information about khanne(me). \n You can use 'help' command to see avaithatlable commands.",
		description: "Get information about this project"
	},
	blog: {
		action: () => {
			window.open("https://iwannaberealnerd.oopy.io/develog");
			return "Opening new tabs for khanne's blog...";
		},
		description: "Open new window for khanne's blog"
	},
	clear: {
		action: () => "",
		description: "Clear history"
	},
	contact: {
		action: () =>
			"- Email: iwannaberealnerd@gmail.com\n- Phone Number: +821051200592\n- LinkedIn: www.linkedin.com/in/honggwanjeong",
		description: "Get khanne's contact information"
	},
	coooooooontact: {
		action: () =>
			"- Email: iwannaberealnerd@gmail.com\n- Phone Number: +821051200592\n- LinkedIn: www.linkedin.com/in/honggwanjeong",
		description: "Get khanne's contact information"
	},
	github: {
		action: () => {
			window.open("https://github.com/IwannabeRealnerD");
			return "Redirecting to khanne's github repositories...";
		},
		description: "Open new window for khanne's GitHub"
	},
	help: {
		action: () => {
			return (
				"Available Commands:\n" +
				Object.entries(COMMAND_DEFINITIONS)
					.map(([key, command]) => `  ${key}: ${command.description}`)
					.join("\n")
			);
		},
		description: "Display available commands"
	},
	pwd: {
		action: () => window.location.href,
		description: "Show current URL"
	}
} as const;
