import { ImageWithState } from "./ImageWithState";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>{`<ImageWithState />`}</h1>

      <div className="wrapper">
        <p>Default usage</p>
        <ImageWithState
          src="https://images.unsplash.com/photo-1629363447922-1f421b470828"
          alt="Image by Tim Schmidbauer on Unsplash"
          width={500}
          height={275}
          placeholder="empty"
          layout="intrinsic"
          fallback="random thing"
          unoptimized={true}
        />

        <p>Errored state</p>
        <ImageWithState
          src="some random unsupported link"
          alt="Errored state"
          width={500}
          height={275}
          placeholder="empty"
          layout="intrinsic"
          fallback="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          unoptimized={true}
        />

        <p>Debugger on</p>
        <ImageWithState
          src="https://images.unsplash.com/photo-1629363447922-1f421b470828"
          alt="Image by Tim Schmidbauer on Unsplash"
          width={500}
          height={275}
          placeholder="empty"
          layout="intrinsic"
          fallback="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          unoptimized={true}
          debug="true"
        />
      </div>
    </div>
  );
}

