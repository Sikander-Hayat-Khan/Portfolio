export default function BackgroundBlobs() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-light dark:bg-dark transition-colors duration-500">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 dark:bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/20 dark:bg-secondary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-accent/20 dark:bg-accent/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
    </div>
  );
}
