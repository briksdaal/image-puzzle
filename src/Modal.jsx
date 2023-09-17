export default function Modal({ handleModalClick }) {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-full w-full justify-center overflow-y-auto overflow-x-hidden bg-gray-400 bg-opacity-80 p-4 md:inset-0">
        <div className="relative flex max-h-full w-full max-w-2xl flex-col justify-center">
          <div className="relative rounded-lg bg-white shadow">
            <div className="flex  items-start justify-center rounded-t border-b p-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Success! You Solved the puzzle!
              </h3>
            </div>

            <div className="flex items-center justify-center p-6">
              <form>
                <button
                  className="rounded bg-blue-500 px-4 py-2 font-bold text-white lg:hover:bg-blue-700"
                  onClick={handleModalClick}>
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
