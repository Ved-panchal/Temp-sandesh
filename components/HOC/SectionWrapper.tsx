

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <section
            className={`w-full mx-[228px] relative z-0`}
        >
            {/* <span className="hash-span" id={idName}>
                &nbsp;
            </span> */}
            <Component />
        </section>
    );
}

export default SectionWrapper;