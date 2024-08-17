import React from 'react'
import Image from 'next/image'
import Meta from "../../../public/Meta.png"
import Mistral from "../../../public/Mistral.png"
import Cohere from "../../../public/Cohere.png"
import Anthropic from "../../../public/Anthropic.png"
import OpenAI from "../../../public/OpenAI.png"

type Props = {}

const Features = (props: Props) => {
  return (
    <section className='w-full flex justify-center py-[6.25rem]'>
        <div className='self-center w-[85%]'>
            <div className='relative 2xl:flex-row xl:flex-row md:flex-row sm:flex-col xsm:flex-col flex  justify-start gap-[5%] xl:h-[70vh] 2xl:h-[70vh] xsm:h-[100%] sm:h-[100%] md:h-[100%] '>
                <div className='self-start 2xl:w-[45%] xl:w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] bg-halluminateGrey rounded-2xl flex justify-center items-center px-[24px] xsm:py-8 sm:py-8'>
                    <div className='self-center h-[80%] bg-halluminateWhite w-[70%] shadow-sm rounded-2xl flex flex-col px-[2rem]'>
                        <div className='h-[70%] relative flex justify-center items-center gap-2'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-full shadow-none p-2 object-contain flex items-center justify-center'><Image src={Anthropic} width={400} height={500} alt='anthropic logo' className='object-contain'/></div>
                            <div className='w-[3rem] h-[3rem] rounded-full shadow-sm p-2 object-contain flex items-center justify-center'><Image src={Meta} width={400} height={500} alt='Meta logo' className='object-contain'/></div>
                            <div className='w-[4.5rem] h-[4.5rem] rounded-full shadow-lg p-2 object-contain flex items-center justify-center'><Image src={OpenAI} width={400} height={500} alt='Open ai logo' className='object-contain'/></div>
                            <div className='w-[3rem] h-[3rem] rounded-full shadow-sm p-2 object-contain flex items-center justify-center'><Image src={Mistral} width={400} height={500} alt='Mistral logo' className='object-contain'/></div>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-full shadow-none p-2 object-contain flex items-center justify-center'><Image src={Cohere} width={400} height={500} alt='cohere logo' className='object-contain'/></div>
                        </div>
                        <div className='xl:h-[30%]'>
                            <h3 className='font-[600] text-[1.125rem] leading-[1.75rem]'>What is an evaluation model?</h3>
                            <p className='mt-[1rem] text-[.875rem] text-[#828b9c]'>A class of specialized models designed to assess and grade the outputs produced by another generative foundation model.</p>
                        </div>
                    </div>
                </div>
                <div className='self-start xl:w-[30%] 2xl:w-[30%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] flex flex-col gap-[1rem] items-center justify-center'>
                    <h2 className='2xl:text-[32px] xl:text-[32px] md:text-[28px] sm:text-[28px] xsm:text-[24px] font-[700] leading-[40px] text-halluminateBlack xl:text-left 2xl:text-left sm:text-center xsm:text-center'>Test AI agents in <span className='text-halluminateBlue'>seconds</span>, not hours</h2>
                    <p className='leading-[24px] text-[#828b9c] text-[16px]'>
                        Manually checking AI outputs can burn 100+ engineering hours. Reduce that time by 90% with API-based confidence scores powered by evaluation models.
                    </p>
                    <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex sm-hidden md:hidden xsm:hidden  h-[136px] self-start absolute bottom-0 ml-[0.6rem]'></div>
                </div>
            </div>
            <span className='relative 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden justify-start gap-[5%]'>
                <span className='w-[45%]'></span>
                <span className='opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#828b9c" width="20" height="20">
                    <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
            </span>
            <div className='relative flex 2xl:flex-row xl:flex-row md:flex-col sm:flex-col xsm:flex-col justify-start gap-[5%] 2xl:h-[70vh] xl:h-[70%] xsm:mt-[3rem] sm:mt-[2rem]'>
                <div className='self-start 2xl:w-[45%] xl:w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] bg-halluminateGrey rounded-2xl flex flex-col gap-[16px] justify-center items-center px-[24px] py-[20px]'>
                    <div className='self-center h-[80%] bg-halluminateWhite w-[70%] shadow-sm rounded-2xl flex flex-col px-[2rem] justify-center'>
                        <span className='mt-4'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                width="24px"
                                height="24px"
                                >
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7 0 .553.448 1 1 1h12c.552 0 1-.447 1-1 0-3.866-3.134-7-7-7z"/>
                            </svg>
                        </span>
                        <h3 className='font-[700] text-[1rem] text-halluminateBlue mt-[30px]'>Accuracy</h3>
                        <p className='text-[0.875rem] text-[#828b9c] mt-[8px]'>
                            Check the truthfulness of your generation against a ground truth answer.
                        </p>
                    </div>

                    <div className='self-center h-[80%] bg-halluminateWhite w-[70%] shadow-sm rounded-2xl flex flex-col px-[2rem] justify-center'>
                        <span className='mt-4'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                width="24px"
                                height="24px"
                                >
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7 0 .553.448 1 1 1h12c.552 0 1-.447 1-1 0-3.866-3.134-7-7-7z"/>
                            </svg>
                        </span>
                        <h3 className='font-[700] text-[1rem] text-halluminateBlue mt-[30px]'>Structure</h3>
                        <p className='text-[0.875rem] text-[#828b9c] mt-[8px]'>
                            Validate if your AI generated output has the structure and consistency you want.
                        </p>
                    </div>

                    <div className='self-center h-[80%] bg-halluminateWhite w-[70%] shadow-sm rounded-2xl flex flex-col px-[2rem] justify-center'>
                        <span className='mt-4'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                width="24px"
                                height="24px"
                                >
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7 0 .553.448 1 1 1h12c.552 0 1-.447 1-1 0-3.866-3.134-7-7-7z"/>
                            </svg>
                        </span>
                        <h3 className='font-[700] text-[1rem] text-halluminateBlue mt-[30px]'>Security / PII</h3>
                        <p className='text-[0.875rem] text-[#828b9c] mt-[8px]'>
                            Flag your generated outputs for sensitive information and data security leakage.
                        </p>
                    </div>

                </div>
                <div className='self-start 2xl:w-[30%] xl:w-[30%] md:w-[100%] sm:w-[100%] xsm:w-[100%] xsm:mt-4 h-[100%] flex flex-col gap-[1rem] items-center justify-center'>
                <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex md:hidden xsm:hidden sm:hidden h-[136px] self-start absolute top-0 ml-[0.6rem]'></div>
                    <h2 className='text-[32px] font-[700] leading-[40px] text-halluminateBlack text-left'>Define <span className='text-halluminateBlue'>custom</span> testing requirements</h2>
                    <p className='leading-[24px] text-[#828b9c] text-[16px]'>
                        Every AI application has its own unique testing criteria. Craft the perfect grading rubric for your model judge in our UI based playground, or manipulate the code directly.
                    </p>
                    <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex md:hidden xsm:hidden sm:hidden h-[136px] self-start absolute bottom-0 ml-[0.6rem]'></div>
                </div>
            </div>
            <span className='relative 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden justify-start gap-[5%]'>
                <span className='w-[45%]'></span>
                <span className='opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#828b9c" width="20" height="20">
                    <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
            </span>
            <div className='relative flex 2xl:flex-row xl:flex-row md:flex-col xsm:flex-col sm:flex-col justify-start gap-[5%] 2xl:h-[70vh] xl:h-[70vh] md:h-[100vh] xsm:h-[100vh] sm:h-[100vh] xsm:mt-[2rem]'>
                <div className='self-start 2xl:w-[45%] xl:w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] bg-halluminateGrey rounded-2xl'></div>
                <div className='self-start 2xl:w-[30%] xl:w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%]   h-[100%] flex flex-col gap-[1rem] items-center justify-center'>
                <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden h-[136px] self-start absolute top-0 ml-[0.6rem]'></div>
                    <h2 className='text-[32px] font-[700] leading-[40px] text-halluminateBlack text-left'>Align with human graders for <span className='text-halluminateBlue'>trustworthy</span>  results</h2>
                    <p className='leading-[24px] text-[#828b9c] text-[16px]'>
                        We get it - trusting an AI to evaluate your AI agent can be difficult. Align your evaluation model&apos;s judgement against a set of annotated labels to improve its correlation with human graders.
                    </p>
                    <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden h-[136px] self-start absolute bottom-0 ml-[0.6rem]'></div>
                </div>
            </div>
            <span className='relative 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden justify-start gap-[5%]'>
                <span className='w-[45%]'></span>
                <span className='opacity-80'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#828b9c" width="20" height="20">
                    <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
            </span>
            <div className='relative flex 2xl:flex-row xl:flex-row md:flex-col xsm:flex-col sm:flex-col justify-start gap-[5%] h-[70vh]'>
                <div className='self-start 2xl:w-[45%] xl:w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] bg-halluminateGrey rounded-2xl'></div>
                <div className='self-start 2xl:w-[30%] xl:w-[30%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[100%] flex flex-col gap-[1rem] items-center justify-center'>
                    <div className='bg-[#e6e6e6] w-[1px] 2xl:flex xl:flex md:hidden sm:hidden xsm:hidden h-[136px] self-start absolute top-0 ml-[0.6rem]'></div>
                    <h2 className='text-[32px] font-[700] leading-[40px] text-halluminateBlack text-left '>Integrate  <span className='text-halluminateBlue'> anywhere</span></h2>
                    <p className='leading-[24px] text-left text-[#828b9c] text-[16px]'>
                        Our API-based endpoint can be integrated anywhere, from your favorite observability platform to your code base directly.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features