export default function getResultColor(value: number): { color: string } {
    if (value < 10) return { color: "#ff0000" };
    else if (value < 20) return { color: "#fa2b00" };
    else if (value < 30) return { color: "#f55600" };
    else if (value < 40) return { color: "#f18000" };
    else if (value < 50) return { color: "#ecaa00" };
    else if (value < 60) return { color: "#e6d400" };
    else if (value < 70) return { color: "#b8dd05" };
    else if (value < 80) return { color: "#8ae60a" };
    else if (value < 90) return { color: "#5cef0f" };
    else if (value < 100) return { color: "#2ef714" };
    else return { color: "#00ff19" };
}
