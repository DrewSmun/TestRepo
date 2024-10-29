export default function myCourses() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">RegiLax</h2>
                    <div className="mt-2">
                        <svg viewBox="0 0 100 20" className="w-full">
                            <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}