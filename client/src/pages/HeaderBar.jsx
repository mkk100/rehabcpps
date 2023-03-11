export default function HeaderBar() {
    return (
        <div>
            <header className="p-4 flex justify-between border">
                <a href="" className='flex items-center font-bold text-xl'>cppsRehab</a>
                <div className="flex space-x-7 pr-12">
                    <a href="">Home</a>
                    <a href="">Sign in</a>
                    <a href="">Log in</a>
                    <a href="">About me</a>
                </div>
            </header>
        </div>
    )
}  