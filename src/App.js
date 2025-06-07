// Functional Recovery App: Version 1

import React, { useState } from 'react';

// Define a list of key nutrients to track daily
const nutrients = [
  "Magnesium",
  "Calcium",
  "Omega-3s",
  "Zinc",
  "B-complex",
  "Protein",
  "Fiber",
  "Vitamin C",
  "Iron",
  "Antioxidants"
];

// Define a list of functional teas with their benefits and preparation method
const teas = [
  { name: "Green Tea", benefits: "Focus, calm energy", tags: ["Focus", "Mood"], how: "1 tsp per 8 oz, steep 2–3 min" },
  { name: "Chamomile", benefits: "Relaxation, sleep support", tags: ["Sleep", "Mood"], how: "1 tbsp per cup, steep 5–7 min" },
  { name: "Peppermint", benefits: "Digestion, clarity", tags: ["Gut", "Mood"], how: "1 tsp dried or a tea bag" },
  { name: "Reishi Mushroom", benefits: "Immune + nervous system support", tags: ["Mood", "Immune", "Sleep"], how: "Simmer slices 20 min" }
];

const App = () => {
  // Initialize state to track which nutrients have been checked off
  // The state is an object where keys are nutrient names and values are booleans
  const [checklist, setChecklist] = useState(
    nutrients.reduce((acc, nutrient) => ({ ...acc, [nutrient]: false }), {})
  );

  // Toggle function to switch the boolean state of a nutrient when the checkbox is clicked
  const toggleNutrient = (nutrient) => {
    setChecklist({ ...checklist, [nutrient]: !checklist[nutrient] });
  };

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">🌿 Recovery Nutrition App</h1>

      {/* Daily Nutrient Checklist Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Daily Nutrient Checklist</h2>
        <ul className="space-y-2">
          {/* Render a checkbox for each nutrient */}
          {nutrients.map((nutrient) => (
            <li key={nutrient}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={checklist[nutrient]} // Controlled checkbox state
                  onChange={() => toggleNutrient(nutrient)} // Update state on change
                  className="mr-2"
                />
                {nutrient}
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Teas and Functional Drinks Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🍵 Teas & Functional Drinks</h2>
        <ul className="space-y-3">
          {/* Render each tea with name, benefits, preparation, and tags */}
          {teas.map((tea) => (
            <li key={tea.name} className="border rounded-lg p-3">
              <h3 className="text-lg font-bold">☕ {tea.name}</h3>
              <p className="text-sm text-gray-700">{tea.benefits}</p>
              <p className="text-xs text-gray-500 italic">How: {tea.how}</p>
              <div className="mt-1 text-xs text-green-600">
                Tags: {tea.tags.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
