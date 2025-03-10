import { Octokit } from '@octokit/rest';
import fs from 'fs';

// Extraer owner y repo de la variable de entorno
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function updateReadmeWithMilestones() {
  const { data: milestones } = await octokit.issues.listMilestones({
    owner,
    repo,
    state: "open" // o "all", según necesites
  });

  let mdContent = "## Milestones\n\n";
  milestones.forEach(milestone => {
    mdContent += `- **${milestone.title}**: ${milestone.description || "Sin descripción"}\n`;
  });

  // Asumiendo que tienes un marcador en el README para reemplazar la sección de milestones
  let readme = fs.readFileSync("README.md", "utf8");
  const markerStart = "<!-- MILESTONES-START -->";
  const markerEnd = "<!-- MILESTONES-END -->";
  const regex = new RegExp(`${markerStart}[\\s\\S]*${markerEnd}`);
  const newSection = `${markerStart}\n${mdContent}\n${markerEnd}`;
  readme = readme.replace(regex, newSection);

  fs.writeFileSync("README.md", readme);
}

updateReadmeWithMilestones();
