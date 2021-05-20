export default function Home() {
  return (
    <div className="bs-container tw-grid tw-gap-4">
      <p>
        On this page all Tailwind classes start with `tw-` and all Bootstrap
        classes start with `bs-`.
      </p>
      <div className="">
        <button className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">
          Tailwind Button
        </button>
      </div>
      <div className="">
        <button className="bs-btn bs-btn-primary">Bootstrap Button</button>
      </div>
    </div>
  );
}
