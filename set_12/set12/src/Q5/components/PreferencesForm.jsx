import { useContext } from 'react';
import { UserPreferencesContext } from '../context/UserPreferencesContext';
// import { useUserPreferences } from '../context/UserPreferencesContext';

const PreferencesForm = () => {
  const { preferences, setPreferences } = useContext(UserPreferencesContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Preferences</h3>
      <label>
        Font Size:
        <select name="fontSize" value={preferences.fontSize} onChange={handleChange}>
          <option value="14px">Small</option>
          <option value="16px">Medium</option>
          <option value="50px">Large</option>
        </select>
      </label>

      <label style={{ marginLeft: '1rem' }}>
        Color Scheme:
        <select name="colorScheme" value={preferences.colorScheme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default PreferencesForm;
