const Navbar = () => {
    return (
        <>
            <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-10">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrapk text-white">Waterfall Tour</span>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;