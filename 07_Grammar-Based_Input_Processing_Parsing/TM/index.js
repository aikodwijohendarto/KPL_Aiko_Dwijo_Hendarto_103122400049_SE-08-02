function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: []
  };

  let active = [];

  text.split("\n").forEach((raw) => {
    const line = raw.trim();

    if (!line || line.startsWith("#")) {
      active = [];
      return;
    }

    const idx = line.indexOf(":");
    if (idx === -1) return;

    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (key === "user-agent") {
      const agent = value.toLowerCase();

      if (!result.agents[agent]) {
        result.agents[agent] = { Allow: [], Disallow: [] };
      }

      active.push(agent);
      return;
    }

    if (key === "allow" || key === "disallow") {
      if (!value) return;

      active.forEach(agent => {
        if (!result.agents[agent]) return;

        if (key === "allow") {
          result.agents[agent].Allow.push(value);
        } else {
          result.agents[agent].Disallow.push(value);
        }
      });

      return;
    }

    if (key === "sitemap") {
      if (value) result.Sitemap.push(value);
      return;
    }

    if (key === "host") {
      if (value) result.Host = value;
    }
  });

  return result;
}

module.exports = parseRobots;