export const projetos = [
  {
    slug: "cuphub",
    titulo: "CupHub",
    subtitulo: "Plataforma de Gerenciamento de Torneios",
    ano: "2026",
    repositorio: "https://github.com/henriquexvr/cuphub",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Git"],
    visao: "Projeto com ciclo completo: modelagem de processos, implementação e entrega colaborativa, desenvolvido em equipe ao longo do semestre.",
    destaques: [
      "API REST em Java/Spring Boot com autenticação, regras de negócio e persistência em MySQL via JPA.",
      "Front-end em React (Vite) consumindo a API.",
      "Desenvolvimento em equipe com Git/GitHub ao longo do semestre."
    ],
    papel: "Responsável pelo backend de gerenciamento de torneios."
  },
  {
    slug: "automacao",
    titulo: "Automação de Emissão de Documentos",
    subtitulo: "",
    ano: "2026",
    repositorio: "https://github.com/henriquexvr/bot-emissor-lm",
    stack: ["Node.js", "Playwright", "SheetJS"],
    visao: "Automação para emissão em massa de documentos de transporte, eliminando um processo manual repetitivo.",
    destaques: [
      "Script com Playwright para emissão em massa de documentos de transporte.",
      "Pipeline de leitura e processamento de planilhas com SheetJS para alimentar o sistema interno de forma automatizada."
    ],
    papel: "Desenvolvimento da automação com Playwright e Node.js."
  }
];