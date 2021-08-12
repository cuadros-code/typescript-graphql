## Configurar proyecto de node con Typecript

- iniciar proyecto de node ( `npm init` )
- dependencias de desarrollo  ( `npm i -D typescript ts-node @types/node nodemon` )
- crear archivo de config de typescript ( `npx tsc --init` )

- crear archivo de arranque `src/index.ts`
- script de arranque en `package.json` <br> "     scripts":  {<br>
  "dev": "nodemon src/index.ts --exec ts-node"
    <br>}

- iniciar desarrollo ( `npm run dev` )