module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', 
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transformer les fichiers TypeScript
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Si tu utilises un alias de module
    },
    globals: {
        'ts-jest': {
            useESM: true, // Permet l'utilisation des modules ES avec Jest
        },
    },
    // Important : gérer l'importation de fichiers avec extension .ts/.tsx
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
