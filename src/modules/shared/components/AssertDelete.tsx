'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/modules/ui/alert-dialog'
import { Button, buttonVariants } from '@/modules/ui/button'
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog'
import { VariantProps } from 'class-variance-authority'
import { Trash } from 'lucide-react'

type ButtonVariant = VariantProps<typeof buttonVariants>['variant']

export default function AssertDelete({
    title,
    description,
    onDelete,
    disabled,
    variant = 'outline', 
}: {
    title: string
    description: string
    onDelete: () => void
    disabled?: boolean
    variant?: ButtonVariant
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={variant} disabled={disabled}>
                    <Trash />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete}>
                        Accept
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
