"use client"

export const FruitPicker = ({ deviceType }: { deviceType: string }) => {

    const fruits = ["Banane", "Mangue", "Cerise", "Fraise", "Prune"];

    const handleClick = (fruit : string) => {
        alert(`Vous avez choisi le fruit : ${fruit}`)
    }

    return (
        <section>
            {deviceType === "desktop" && (
                <table>
                    {fruits.map((fruit) => (
                        <tr className={"border"} key={fruit} onClick={() => handleClick(fruit)}>
                            {fruit}
                        </tr>
                    ))}
                </table>
            )}

            {deviceType === "mobile" && (
                <select>
                    {fruits.map((fruit) => (
                        <option
                            key={fruit}
                            value={fruit}
                            onClick={() => handleClick(fruit)}
                        >{fruit}</option>
                    ))}
                </select>
            )}
        </section>
    );
};
