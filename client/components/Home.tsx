export default function Home() {
  return (
    <div className=" justify-center items-start h-screen">
      <div className="w-full bg-green-400 p-[20px]">
        <h2 className="text-2xl text-center font-bold p-2">Home</h2>
      </div>
    
      <div className="w-full flex justify-center items-center p-20  ">
        <p className="bg-green-100 p-[10px]
        rounded-2xl">
          Welcome to Caption This! To play, click on Caption This in the Nav Bar.
          All you have to do is add a caption to one of our fabulous memes! You
          can view other peoples captions in the gallery page! The caption with
          the most upvotes will win a prize! (maybe)
        </p>
      </div>
    </div>
  )
}
