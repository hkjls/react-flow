// src/assets/images/test-import.ts

const Images = import.meta.glob<{ default: string }>('./*.png', {
    eager: true,
    import: 'default',
  });
  
export default Images