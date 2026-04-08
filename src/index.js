const plugin = require('tailwindcss/plugin');
const fs = require('fs');
const path = require('path');
const pc = require('picocolors');

const dsInfo = require('../package.json');
const defaultColors = require('./theme/colors.js');

// --- Load pre-compiled styles ---
const compiledStyles = (() => {
  const filePath = path.join(__dirname, '../dist/plugin.js');
  try {
    return fs.existsSync(filePath) ? require(filePath) : {};
  } catch (error) {
    console.error('Error loading compiled styles:', error);
    return {};
  }
})();

function extractLayer(styles, layerName) {
  const key = `@layer ${layerName}`;
  return styles[key] || {};
}

const baseStyles = extractLayer(compiledStyles, 'aegov-base');
const componentStyles = extractLayer(compiledStyles, 'aegov-components');
const utilityStyles = extractLayer(compiledStyles, 'aegov-utilities');

// --- Color generation functions ---
function generateColorVariables(colors) {
  const variables = {};
  for (const colorName in colors) {
    const shades = colors[colorName];
    if (typeof shades === 'object' && shades !== null) {
      for (const shade in shades) {
        variables[`--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`}`] = shades[shade];
      }
    } else {
      variables[`--color-${colorName}`] = shades;
    }
  }
  return variables;
}

function generateColorTheme(colors) {
  const theme = {};
  for (const colorName in colors) {
    const shades = colors[colorName];
    if (typeof shades === 'object' && shades !== null) {
      theme[colorName] = {};
      for (const shade in shades) {
        theme[colorName][shade] = `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
      }
    } else {
      theme[colorName] = `var(--color-${colorName})`;
    }
  }
  return theme;
}

// --- Plugin definition ---
const mainFunction = ({ addBase, addComponents, addUtilities }) => {
  const includedItems = [];
  console.group();
  console.log("\n" + pc.bold(pc.magenta("@aegov/design-system,")));
  console.log(pc.bold("version: " + dsInfo.version));
  console.log(pc.gray("Powered by " + dsInfo.author) + "\n");
  console.group();

  // Add base styles and color variables
  addBase({ ':where(:root)': generateColorVariables(defaultColors), ...baseStyles });
  includedItems.push("Base");

  // Add component styles
  if (Object.keys(componentStyles).length > 0) {
    addComponents(componentStyles);
    includedItems.push("Components");
  }

  // Add utility styles
  if (Object.keys(utilityStyles).length > 0) {
    addUtilities(utilityStyles);
    includedItems.push("Utilities");
  }

  // console.log(pc.green("✔︎ Including: ") + includedItems.join(", "));
  console.groupEnd();
  console.groupEnd();
};

const pluginConfig = {
  theme: {
    colors: generateColorTheme(defaultColors),
    extend: {
      boxShadow: {
        button: "var(--shadow-button)",
      },
      fontFamily: {
        'heading': "var(--font-heading)",
        'body': "var(--font-body)",
        'roboto': "var(--font-roboto)",
        'inter': "var(--font-inter)",
        'notokufi': "var(--font-notokufi)",
        'alexandria': "var(--font-alexandria)"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-padding)",
          md: "var(--container-padding-md)",
          lg: "var(--container-padding-lg)",
          xl: "var(--container-padding-xl)",
          '2xl': "var(--container-padding-2xl)",
        },
      },
    }
  },
};

module.exports = plugin(mainFunction, pluginConfig);
