// Functional Recovery App with Tab Navigation

import React, { useState } from 'react';

// Components for each tab section
const Checklist = ({ checklist, toggleNutrient }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">✅ Daily Nutrient Checklist</h2>
    <ul className="space-y-2">
      {Object.keys(checklist).map((nutrient) => (
        <li key={nutrient}>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={checklist[nutrient]}
              onChange={() => toggleNutrient(nutrient)}
              className="mr-2"
            />
            {nutrient}
          </label>
        </li>
      ))}
    </ul>
  </section>
);

const FoodLog = () => (
  <section>
    <h2 className="text-xl font-semibold mb-2">🍽️ Food Log (Coming Soon)</h2>
    <p className="text-gray-600">This section will allow intuitive logging using portions like "1 handful" or "4 fingers worth".</p>
  </section>
);

const Profile = () => (
  <section>
    <h2 className="text-xl font-semibold mb-2">🙋 User Profile</h2>
    <p className="text-gray-600">Soon you'll enter height, weight, and age for personalized tracking.</p>
  </section>
);

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

const teas = [
  { name: "Green Tea", benefits: "Focus, calm energy", tags: ["Focus", "Mood"], how: "1 tsp per 8 oz, steep 2–3 min" },
  { name: "Chamomile", benefits: "Relaxation, sleep support", tags: ["Sleep", "Mood"], how: "1 tbsp per cup, steep 5–7 min" },
  { name: "Peppermint", benefits: "Digestion, clarity", tags: ["Gut", "Mood"], how: "1 tsp dried or a tea bag" },
  { name: "Reishi Mushroom", benefits: "Immune + nervous system support", tags: ["Mood", "Immune", "Sleep"], how: "Simmer slices 20 min" }
];

const App = () => {
  const [checklist, setChecklist] = useState(
    nutrients.reduce((acc, nutrient) => ({ ...acc, [nutrient]: false }), {})
  );
  const [activeTab, setActiveTab] = useState('Checklist');

  const toggleNutrient = (nutrient) => {
    setChecklist({ ...checklist, [nutrient]: !checklist[nutrient] });
  };

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">🌿 Recovery Nutrition App</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        {['Checklist', 'Food Log', 'Profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-green-200 font-semibold' : 'bg-gray-100'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Checklist' && (
        <>
          <Checklist checklist={checklist} toggleNutrient={toggleNutrient} />

          <section>
            <h2 className="text-xl font-semibold mb-2">🍵 Teas & Functional Drinks</h2>
            <ul className="space-y-3">
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
        </>
      )}

      {activeTab === 'Food Log' && <FoodLog />}
      {activeTab === 'Profile' && <Profile />}
    </div>
  );
};

export default App;
