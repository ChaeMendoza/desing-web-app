import React, { useState } from 'react';

const ContentGenerator: React.FC = () => {
    const [generatedContent, setGeneratedContent] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleGenerateContent = () => {
        // Lógica para generar contenido utilizando ChatGPT-3
        // Utiliza los valores de los campos de entrada
        const generatedText = `Title: ${title}\n Description: ${description}`;
        setGeneratedContent(generatedText);
    };

    return (
        <div>
            <h2 className='text-center text-gray-700 text-2xl font-semibold mb-4'>Generador de contenido</h2>
            <p className='text-center text-gray-800'>Para generar sugerencias es necesario un titulo y una descripcion para ser más preciso.<br />Después encontrarás una sugerencia de colores que te puede ayudar en el diseños de tu sitio web. <br />Luego puedes modificar las sugerencias de tal manera que puedas personalizar a tu gusto.</p>
            <div className='flex justify-between items-center'>
                <form className="w-full max-w-sm m-20">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Título
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-full-name"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Descripción
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-password"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={handleGenerateContent}
                            >
                                Generate Content
                            </button>
                        </div>
                    </div>
                </form>
                {generatedContent && (
                    <div className="bg-gray-700 p-4 mt-4 rounded mr-8">
                        <h3 className="text-white text-lg font-semibold mb-2">Generated Content</h3>
                        <p className='text-white'>{generatedContent}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentGenerator;

