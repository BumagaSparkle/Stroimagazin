import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [area, setArea] = useState('');
    const [floors, setFloors] = useState('');
    const [foundation, setFoundation] = useState('ленточный');
    const [walls, setWalls] = useState('кирпич');
    const [roof, setRoof] = useState('плоская');
    const [options, setOptions] = useState({
        balcony: false,
        terrace: false,
        garage: false,
    });
    const [cost, setCost] = useState(null);

    const handleOptionChange = (option) => {
        setOptions({ ...options, [option]: !options[option] });
    };

    const calculateCost = () => {
        let baseCost = area * floors * 5000; // Базовая стоимость (примерно)
        let foundationCost = foundation === 'плитный' ? 200000 : foundation === 'столбчатый' ? 150000 : 100000;
        let wallsCost = walls === 'кирпич' ? 300000 : walls === 'дерево' ? 200000 : 250000;
        let roofCost = roof === 'скатная' ? 150000 : 100000;

        let optionsCost = 0;
        if (options.balcony) optionsCost += 50000;
        if (options.terrace) optionsCost += 70000;
        if (options.garage) optionsCost += 100000;

        const totalCost = baseCost + foundationCost + wallsCost + roofCost + optionsCost;

        setCost({
            base: baseCost,
            foundation: foundationCost,
            walls: wallsCost,
            roof: roofCost,
            options: optionsCost,
            total: totalCost,
        });
    };

    return (
        <div className="calculator">
            <h1>Калькулятор стоимости строительства</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>
                        Площадь (кв. м.):
                        <input 
                            type="number" 
                            value={area} 
                            onChange={(e) => setArea(Number(e.target.value))} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Количество этажей:
                        <input 
                            type="number" 
                            value={floors} 
                            onChange={(e) => setFloors(Number(e.target.value))} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Тип фундамента:
                        <select value={foundation} onChange={(e) => setFoundation(e.target.value)}>
                            <option value="ленточный">Ленточный</option>
                            <option value="плитный">Плитный</option>
                            <option value="столбчатый">Столбчатый</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Материал стен:
                        <select value={walls} onChange={(e) => setWalls(e.target.value)}>
                            <option value="кирпич">Кирпич</option>
                            <option value="дерево">Дерево</option>
                            <option value="газобетон">Газобетон</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Тип крыши:
                        <select value={roof} onChange={(e) => setRoof(e.target.value)}>
                            <option value="плоская">Плоская</option>
                            <option value="скатная">Скатная</option>
                        </select>
                    </label>
                </div>
                <div>
                    <fieldset>
                        <legend>Дополнительные опции:</legend>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={options.balcony} 
                                onChange={() => handleOptionChange('balcony')} 
                            />
                            Балкон
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={options.terrace} 
                                onChange={() => handleOptionChange('terrace')} 
                            />
                            Терраса
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={options.garage} 
                                onChange={() => handleOptionChange('garage')} 
                            />
                            Гараж
                        </label>
                    </fieldset>
                </div>
                <button type="button" onClick={calculateCost}>
                    Рассчитать стоимость
                </button>
            </form>

            {cost && (
                <div className="results">
                    <h2>Результаты расчета:</h2>
                    <p>Базовая стоимость: {cost.base.toLocaleString()} руб.</p>
                    <p>Фундамент: {cost.foundation.toLocaleString()} руб.</p>
                    <p>Стены: {cost.walls.toLocaleString()} руб.</p>
                    <p>Крыша: {cost.roof.toLocaleString()} руб.</p>
                    <p>Дополнительные опции: {cost.options.toLocaleString()} руб.</p>
                    <h3>Итоговая стоимость: {cost.total.toLocaleString()} руб.</h3>
                </div>
            )}
        </div>
    );
};

export default Calculator;
