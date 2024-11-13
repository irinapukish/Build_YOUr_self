import React from "react";
import { useParams } from 'react-router-dom';
import meals from "../helpers/database.js";

const MealDetailView = () => {
    const { mealId } = useParams();
    // Get meal from database
    const recipeData = meals.find(item => item.id === parseInt(mealId));

    return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={recipeData.imgSrc} alt={recipeData.name} style={styles.image} />
        <div style={styles.details}>
          <div style={styles.title}>{recipeData.name}</div>
          <div style={styles.preparationTime}>
            <div style={styles.timeIcon}>⏲️</div>
            <div>Czas przygotowania: <strong>{recipeData.preparationTime} min</strong></div>
            <div style={styles.timeIcon}>⏱️</div>
            <div>Całkowity czas przygotowania: <strong>{recipeData.totalTime} min</strong></div>
          </div>
          {/* Macronutrients */}
          <div style={styles.kcal}>
            <div style={styles.kcalItem}>
              <div style={styles.circle('#4caf50')}></div>
              <div>{recipeData.kcal.calories_per_100g}</div>
              <div>Kalorie</div>
            </div>
            <div style={styles.kcalItem}>
              <div style={styles.circle('#f48fb1')}></div>
              <div>{recipeData.kcal.carbohydrates_per_100g} g</div>
              <div>Węglowodany</div>
            </div>
            <div style={styles.kcalItem}>
              <div style={styles.circle('#81c784')}></div>
              <div>{recipeData.kcal.protein_per_100g} g</div>
              <div>Białko</div>
            </div>
            <div style={styles.kcalItem}>
              <div style={styles.circle('#ffeb3b')}></div>
              <div>{recipeData.kcal.fat_per_100g} g</div>
              <div>Tłuszcze</div>
            </div>
          </div>
        </div>
      </div>
      <hr style={styles.separator} />
      <div style={styles.recipeDetails}>
        {/* Ingredients List */}
        <div style={styles.ingredientsSection}>
          <h3 style={{textAlign:'start'}}>Składniki</h3>
          <ul style={styles.ingredientList}>
            {recipeData.ingridients.map((ingredient, index) => (
              <li key={index} style={styles.ingredientItem}>
                <input type="checkbox" style={styles.checkbox} />
                <span>{ingredient.count} {ingredient.name} ({ingredient.mass}g)</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Preparation Steps */}
        <div style={styles.preparationSection}>
          <h3 style={{textAlign:'start'}}>Sposób przygotowania</h3>
          <ol style={styles.preparationList}>
            {recipeData.preparation_method.map((step, index) => (
              <li key={index} style={styles.preparationStep}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

const styles = {
    separator: {
        border: 'none',
        borderTop: '1px solid #ddd',
        margin: '20px 0',
    },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    marginTop: '30px',
  },
  header: {
    display: 'flex',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    marginRight: '20px',
    objectFit: 'cover',
    boxShadow: 'none',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'start',
  },
  preparationTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '16px',
    color: '#777',
    marginBottom: '15px',
  },
  timeIcon: {
    fontSize: '18px',
  },
  kcal: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  },
  kcalItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  },
  circle: (color) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
  }),
  recipeDetails: {
    display: 'flex',
    gap: '40px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientsSection: {
    flex: 1,
  },
  ingredientList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  },
  ingredientItem: {
    marginBottom: '8px',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
  },
  preparationSection: {
    flex: 1,
  },
  preparationList: {
    paddingLeft: '20px',
    marginTop: '10px',
    textAlign: 'start',
  },
  preparationStep: {
    marginBottom: '10px',
    fontSize: '15px',
  },
};

export default MealDetailView;
