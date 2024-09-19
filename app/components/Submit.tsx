'use client'

interface SubmitButtonProps {
    text: string,
}

export default function SubmitButton({ text }: SubmitButtonProps) {
    return (
        <button>{ text }</button>
    )
}