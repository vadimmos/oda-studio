import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "oda-studio" is now active!');

	let disposable = vscode.commands.registerCommand('oda-studio.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from oda-studio!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
